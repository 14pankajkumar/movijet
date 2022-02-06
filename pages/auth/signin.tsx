import { getProviders, signIn } from 'next-auth/react'
import { Header } from '../../components'

interface Props {
  providers: [
    {
      id: string
      name: string
    }
  ]
}

const signin = ({ providers }: Props) => {
  return (
    <div>
      <Header />

      <div className="-mt-32 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <div>
        <img className="w-20 mx-10 my-2" src="https://media.graphcms.com/zz9VMtUER4yucCeZX3wT" alt="" />
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-gray-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default signin

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
