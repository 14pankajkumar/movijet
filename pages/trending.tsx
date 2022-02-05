import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header, Nav, ResultsCard } from '../components'
import { Genres, Results } from '../utilities/typing'

interface Props {
  genres: [Genres]
  results: [Results]
}

const Trending = ({ genres, results }: Props) => {
  return (
    <div>
      <Head>
        <title>Trending - MoviJet</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <h1 className="mx-2 mt-10 flex items-center justify-center text-xl font-bold text-white md:mx-auto md:max-w-6xl md:justify-start md:text-3xl">
        Trending
      </h1>

      {/* Results */}
      <ResultsCard results={results} />
    </div>
  )
}

export default Trending

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const trendingData = await axios
    .get(
      `
    ${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`
    )
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      results: trendingData.results,
    },
    revalidate: 60,
  }
}
