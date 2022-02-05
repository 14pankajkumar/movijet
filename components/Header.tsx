import Image from 'next/image'
import {
  StarIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  FilmIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { HeaderItems, Sidebar } from '.'
import { useState } from 'react'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <header className="m-5 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div className="relative flex max-w-2xl flex-grow justify-evenly">
        <HeaderItems link="/" title="HOME" Icon={HomeIcon} />

        <div
          onClick={() => setShowSidebar(true)}
          className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20"
        >
          <FilmIcon className="mb-1 h-8 group-hover:animate-bounce" />
          <p className="tracking-widest opacity-0 group-hover:opacity-100">
            MOVIES
          </p>
        </div>

        <HeaderItems link="/" title="SEARCH" Icon={SearchIcon} />
        <HeaderItems link="/login" title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div>
        <Link href="/">
          <Image
            className="cursor-pointer object-contain"
            src="https://links.papareact.com/ua6"
            height={100}
            width={200}
          />
        </Link>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header>
  )
}

export default Header
