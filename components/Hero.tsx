import Image from 'next/image'
import React from 'react'
import { Media, MediaUrl, SocialId } from '../utilities/typing'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FiExternalLink, FiTwitter } from 'react-icons/fi'

interface Props {
  media: Media
  mediaUrl: MediaUrl
  socialId: SocialId
}

const Hero = ({ media, mediaUrl, socialId }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

  return (
    <div className="relative my-10 h-full w-full bg-black bg-opacity-30 py-8">
      <div className="opacity-20">
        <Image
          placeholder="blur"
          blurDataURL={`${BASE_URL}${media.poster_path}`}
          priority={true}
          className="absolute object-cover"
          layout="fill"
          src={`${BASE_URL}${media.backdrop_path}`}
        />
      </div>
      {/* poster */}
      <div className="relative  mx-auto grid max-w-6xl justify-between md:flex">
        <div className="flex items-center justify-center md:w-2/6">
          <Image
            placeholder="blur"
            blurDataURL={`${BASE_URL}${media.poster_path}`}
            priority={true}
            className="cursor-pointer rounded-lg"
            height="450px"
            width="300px"
            src={`${BASE_URL}${media.poster_path}`}
          />
        </div>
        <div className="relative mx-8 my-8 w-8/12 text-white">
          <h1 className="text-3xl font-bold">{media.title}</h1>
          <div className="grid  items-center gap-4 md:flex">
            <h2 className="text-lg font-semibold">{media.release_date}</h2>{' '}
            &#xb7;{' '}
            {media.genres.map((genre) => (
              <p key={genre.id} className="text-md">
                {genre.name}
              </p>
            ))}
            &#xb7; <p>{media.runtime} minutes</p>
          </div>
          <p className="py-5 italic text-gray-400">{media.tagline}</p>
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="py-3">{media.overview}</p>
          </div>
          <div className="py-2">
            <h1 className="text-xl font-semibold">Story Line</h1>
            <p className="py-3">{mediaUrl?.storyLine}</p>
          </div>
          <div className="flex h-10 w-10 cursor-pointer gap-4">
            <a href={media.homepage} target="_blank">
              <FiExternalLink fontSize={30} />
            </a>
            <a
              href={`https://www.facebook.com/${socialId.facebook_id}`}
              target="_blank"
            >
              <AiOutlineFacebook fontSize={30} />
            </a>
            <a
              href={`https://twitter.com/${socialId.twitter_id}`}
              target="_blank"
            >
              <FiTwitter fontSize={30} />
            </a>
            <a
              href={`https://www.instagram.com/${socialId.twitter_id}`}
              target="_blank"
            >
              <AiOutlineInstagram fontSize={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
