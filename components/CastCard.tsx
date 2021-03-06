import Image from 'next/image'
import React from 'react'
import { Heading } from '.'
import { Casts, Media } from '../utilities/typing'

interface Props {
  casts: [Casts]
}

const CastCard = ({ casts }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

  return (
    <div className="max-w-7xl mx-auto relative">
      <Heading title="Top Billed Cast" />

      <div className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-3 xl:grid-cols-5 3xl:flex">
        {casts.slice(0, 10).map((cast) => {
          return (
            <div
              key={cast.id}
              className="transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
            >
              <div>
                <Image
                  alt={cast.name}
                  placeholder="blur"
                  blurDataURL={`${BASE_URL}${cast.profile_path}`}
                  priority={true}
                  src={`${BASE_URL}${cast.profile_path}`}
                  className="rounded-lg object-cover"
                  layout="responsive"
                  height={600}
                  width={800}
                />
                <div className="p-2 ">
                  <h2 className="mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {cast.name}
                  </h2>
                  <p className="max-w-md truncate">{cast.character}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CastCard
