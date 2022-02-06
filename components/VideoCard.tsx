import Image from 'next/image'
import { Media, MediaUrl } from '../utilities/typing'

interface Props {
  mediaUrl: MediaUrl
  media: Media
}

const VideoCard = ({ mediaUrl, media }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

  return (
    <div className="relative py-8">
      <h1 className="mx-2 flex items-center justify-center text-xl font-bold md:mx-auto md:max-w-6xl md:justify-start md:text-3xl">
        Watch Movie
      </h1>

      <div className="mb-5 mt-5 flex w-full items-center justify-center overflow-hidden rounded-lg px-5">
        <a href={mediaUrl?.mediaUrl} target="_blank">
          <Image
            src={`${BASE_URL}${media.backdrop_path}`}
            priority
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
