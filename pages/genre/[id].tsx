import axios from 'axios'
import Head from 'next/head'
import { Heading, ResultsCard } from '../../components'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Genres, Results } from '../../utilities/typing'

interface Props {
  genres: [Genres]
  results: [Results]
  id: number
}

const Genre = ({ results, genres, id }: Props) => {
  const data = genres.filter((item) => item.id == id)

  return (
    <div>
      <Head>
        <title>{data[0]?.name} - MoviJet</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <Heading title={data[0]?.name} />

      {/* Results */}
      <ResultsCard results={results} />
    </div>
  )
}

export default Genre

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const discoverData = await axios
    .get(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      results: discoverData.results,
      id: id,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const paths = genreData.genres.map((item: Genres) => ({
    params: {
      id: item.id.toString(),
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
