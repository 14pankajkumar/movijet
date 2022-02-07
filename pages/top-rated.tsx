import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Footer, Header, Heading, Nav, ResultsCard } from '../components'
import { Genres, Results } from '../utilities/typing'

interface Props {
  genres: [Genres]
  results: [Results]
}

const TopRated = ({ genres, results }: Props) => {
  return (
    <div>
      <Head>
        <title>Top Rated Movies and TV shows - MoviJet</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Movijet where you can get the latest information about your favourite movies and
          TV shows. Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="Top rated movies, Top rated TV shows, movies to watch on netflix, movies to watch on prime, Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
        />
      </Head>

      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <Heading title="Top Rated" />

      {/* Results */}
      <ResultsCard results={results} />
      <Footer />
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
