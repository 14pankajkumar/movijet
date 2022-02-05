import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header, Nav, ResultsCard } from '../components'
import { Genres, Results } from '../utilities/typing'

interface Props {
  genres: [Genres]
  results: [Results]
}

const TopRated = ({ genres, results }: Props) => {
  return (
    <div>
      <Head>
        <title>Top Rated - MoviJet</title>
      </Head>

      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <h1 className="mx-2 mt-10 flex items-center justify-center text-xl font-bold text-white md:mx-auto md:max-w-6xl md:justify-start md:text-3xl">
        Top Rated
      </h1>

      {/* Results */}
      <ResultsCard results={results} />
    </div>
  )
}

export default TopRated

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const getTopRatedData = await axios
    .get(
      `
      ${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      results: getTopRatedData.results,
    },
    revalidate: 60,
  }
}
