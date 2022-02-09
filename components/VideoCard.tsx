import Image from 'next/image'
import { Heading } from '.'
import { Media, MediaUrl } from '../utilities/typing'

interface Props {
  mediaUrl: MediaUrl
  media: Media
}

const VideoCard = ({ mediaUrl, media }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

  return (
    <div className="relative py-8">
      <Heading title="Watch Movie" />

      <div className="mb-5 mt-5 flex w-full items-center justify-center overflow-hidden rounded-lg px-5">
        <a href={mediaUrl?.mediaUrl} target="_blank">
          <Image
            alt={media.title}
            placeholder="blur"
            blurDataURL={`${BASE_URL}${media.backdrop_path}`}
            src={`${BASE_URL}${media.backdrop_path}`}
            priority={true}
            className="cursor-pointer rounded-lg"
            height="400px"
            width="700px"
          />
        </a>
      </div>
    </div>
  )
}

export default VideoCard
