import Head from 'next/head'
import Link from 'next/link'
import { Footer, Header } from '../components'

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>404 - MoviJet</title>
      </Head>

      <Header />

      <div className="flex h-screen justify-center mt-20">
        <div>
          <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
          <Link href="/">
            <div className="my-5 flex w-full cursor-pointer justify-center rounded-lg bg-gray-500 p-2">
              HOME
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
