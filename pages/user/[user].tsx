import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import { Footer, Header, Nav } from '../../components'
import { Genres } from '../../utilities/typing'
import type { Session } from 'next-auth'

interface Props {
  genres: [Genres]
}

const User = ({ genres }: Props) => {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>MoviJet</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <div className="mx-auto my-5 h-screen max-w-7xl">
        <div className='flex items-center bg-black bg-opacity-30 p-5'>
          <img
            src={`${session?.user?.image}`}
            alt={`${session?.user?.name}`}
            className="h-40 w-40 rounded-full"
          />
          <div className='mx-5'>
          <h1 className='text-2xl font-bold'>{session?.user?.name}</h1>
            <p className='text-lg my-2'>{session?.user?.email}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default User

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context) => {
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
