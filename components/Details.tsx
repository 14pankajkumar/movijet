import { Heading } from '.'
import { Keyword, Media } from '../utilities/typing'

interface Props {
  media: Media
  keyword: Keyword
}

const Details = ({ media, keyword }: Props) => {
  return (
    <div className="relative bg-black bg-opacity-30 py-8">
      <Heading title="Details" />

      <div className="mx-auto mt-1 mb-5 grid w-8/12 grid-cols-2 items-center px-5 md:flex md:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">Status</p>
          <p className="text-md font-semibold text-gray-400">{media.status}</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white">Original Language</p>
          <p className="text-md font-semibold text-gray-400">
            {media.spoken_languages[0].english_name}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white">Budget</p>
          <p className="text-md font-semibold text-gray-400">
            $ {media.budget}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white">Revenue</p>
          <p className="text-md font-semibold text-gray-400">
            $ {media.revenue}
          </p>
        </div>
      </div>

      <Heading title="Keywords" />

      <div className="mx-auto mt-1 mb-5 grid w-8/12 grid-cols-2 items-center gap-4 px-5 md:grid md:grid-cols-3 md:justify-between">
        {keyword.keywords.map((item) => {
          return (
            <div key={item.id}>
              <div className="text-md flex cursor-pointer items-center justify-center rounded-lg bg-zinc-600 p-1 font-semibold text-black">
                {item.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Details
