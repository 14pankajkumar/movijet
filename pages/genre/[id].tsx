import axios from 'axios'
import Head from 'next/head'
import { ResultsCard } from '../../components'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Genres, Results } from '../../utilities/typing'

interface Props {
  genres: [Genres]
  results: [Results]
}

const Genre = ({ results, genres }: Props) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

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
