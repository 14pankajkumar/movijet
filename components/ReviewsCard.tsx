import { Reviews } from '../utilities/typing'
import { AiOutlineStar } from 'react-icons/ai'
import Image from 'next/image'

interface Props {
  reviews: [Reviews]
}

const ReviewsCard = ({ reviews }: Props) => {
  const AVATAR_URL = process.env.NEXT_PUBLIC_USER_AVATAR_URL

  return (
    <div className="relative bg-black bg-opacity-30 py-8">
      <h1 className="mx-2 flex items-center justify-center text-xl font-bold text-white md:mx-auto md:max-w-6xl md:justify-start md:text-3xl">
        Reviews
      </h1>

      <div className="my-10 flex-wrap justify-center gap-5 px-5 sm:grid md:grid-cols-3 xl:grid-cols-2 3xl:flex">
        {reviews.map((review) => {
          const src = review.author_details.avatar_path?.slice(1)
          return (
            <div
              key={review.id}
              className=" cursor-pointer rounded-lg border bg-white p-3 shadow-lg"
            >
              <div className="relative flex items-center justify-start gap-4">
                <a href={`${review.url}`} target="_blank">
                  <img
                    className="h-20 w-20 rounded-full hover:ring-2 hover:ring-red-500 object-cover"
                    src={
                      src || 'https://media.graphcms.com/pGR8cydvSAqEk0IRG6ap'
                    }
                  />
                </a>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-md font-bold text-black">
                      A review by{' '}
                      {review.author_details.name ||
                        review.author_details.username}
                    </p>
                    <div className="flex items-center rounded-lg bg-black p-1 text-white">
                      <span>
                        <AiOutlineStar fontSize={20} />
                      </span>{' '}
                      {review.author_details.rating}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Written by{' '}
                    <span className="font-semibold text-black">
                      {review.author_details.name ||
                        review.author_details.username}
                    </span>{' '}
                    on January 7, 2022
                  </p>
                </div>
              </div>

              <div className="p-3">
                <p className="text-black text-sm pl-10">{review.content.slice(0, 200)}...</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewsCard
