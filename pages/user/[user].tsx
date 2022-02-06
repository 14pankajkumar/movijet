import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import { Header, Nav } from '../../components'
import { Genres } from '../../utilities/typing'

interface Props {
  genres: [Genres]
}

const User = ({ genres }: Props) => {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>MoviJet</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <div className="mt-20 flex h-screen justify-center">
        <div>
          <h1 className="grid grid-cols-1 text-3xl font-bold text-white">
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.uid}</p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default User

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      session: await getSession(context),
    },
  }
}
