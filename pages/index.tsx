import axios from 'axios'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Footer, Header, Heading, Nav, ResultsCard } from '../components'
import { getUser, saveUser } from '../graphql'
import { Genres, Results } from '../utilities/typing'
interface Props {
  genres: [Genres]
  popularData: [Results]
}

const Home = ({ genres, popularData }: Props) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) return

    const obj = {
      uid: session?.user?.uid,
      email: session?.user?.email,
      name: session?.user?.name,
      username: session?.user?.username,
      profileImageUrl: session?.user?.image,
    }
    const result = async () => {
      const getData = await getUser(session.user?.uid)

      if (getData !== null) return

      await saveUser(obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    result()
  }, [session])

  return (
    <div>
      <Head>
        <title>
          MoviJet || Get the latest information about your favourite movies and
          TV shows. || Download and watch the latest Movies and TV shows.
        </title>
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
          content="movies to watch on netflix, movies to watch on prime, Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
        />
      </Head>

      <div
        className="m-0 min-h-screen bg-black"
        style={{
          backgroundImage:
            'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://media.graphcms.com/RO3E8YnKQeymcSRywhx1)',
        }}
      >
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Nav genres={genres} />

        <main className="mt-32 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="max-w-lg text-5xl font-medium tracking-wider ">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="my-4 text-2xl ">Watch anywhere. Free Download.</h2>
          <p className="text-lg text-white">
            Get the latest information about your favourite movies and TV shows.
          </p>
          <p className="text-lg ">
            Ready to watch? Just{' '}
            <Link href="/auth/signin">
              <span className="cursor-pointer hover:text-white">Sign In</span>
            </Link>
          </p>
        </main>
      </div>
      <Heading title="What's Popular" />
      <ResultsCard results={popularData} />
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const getPopularMovie = await axios(
    `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      popularData: getPopularMovie.results,
    },
    revalidate: 60,
  }
}
