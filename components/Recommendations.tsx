import Image from 'next/image'
import { useRouter } from 'next/router'
import { Heading } from '.'
import { Results } from '../utilities/typing'

interface Props {
  recommendationsData: [Results]
}

const Recommendations = ({ recommendationsData }: Props) => {
  const router = useRouter()
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL
  return (
    <div>
      <Heading title="Recommendations" />

      <div className="my-5 flex-wrap justify-center px-5 sm:grid md:grid-cols-4 xl:grid-cols-6 3xl:flex">
        {recommendationsData.map((item) => {
          return (
            <div
              onClick={() => router.push(`/media/${item.id}?=${item.title}`)}
              className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
            >
              <Image
                placeholder="blur"
                blurDataURL={`${BASE_URL}${item.poster_path}`}
                priority={true}
                className="rounded-lg"
                layout="responsive"
                height="450px"
                width="300px"
                src={`${BASE_URL}${item.poster_path}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recommendations
