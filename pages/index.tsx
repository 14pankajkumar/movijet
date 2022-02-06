import axios from 'axios'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Nav } from '../components'
import { getUser, saveUser } from '../graphql'
import { Genres } from '../utilities/typing'
interface Props {
  genres: [Genres]
}

const Home = ({ genres }: Props) => {
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
        <title>MoviJet</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />
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

  return {
    props: {
      genres: genreData.genres,
    },
    revalidate: 60,
  }
}
