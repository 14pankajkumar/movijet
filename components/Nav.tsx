import { useRouter } from 'next/router'
import { Genres } from '../utilities/typing'

interface Props {
  genres: [Genres]
}

const Nav = ({ genres }: Props) => {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex space-x-10 overflow-x-scroll whitespace-nowrap py-1 px-10 text-2xl scrollbar-hide sm:space-x-20 sm:px-20">
        {genres.map((item) => {
          return (
            <h2
              key={item.id}
              onClick={() =>
                router.push(`/genre/${item.id}?=${item.name.toLowerCase().split(' ').join('-')}`)
              }
              className="transform cursor-pointer transition duration-100 last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
            >
              {item.name}
            </h2>
          )
        })}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]"></div>
    </nav>
  )
}

export default Nav
