import Image from 'next/image'
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  FilmIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { HeaderItems, Sidebar, UserSidebar } from '.'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showUserSidebar, setUserShowSidebar] = useState(false)
  const { data: session } = useSession()

  return (
    <header className="mx-5 flex h-auto flex-col items-center justify-between sm:flex-row">
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

        {session ? (
          <div
            onClick={() => setUserShowSidebar(true)}
            className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20"
          >
            <img
              src={`${session?.user?.image}`}
              className="mb-1 h-8 rounded-full group-hover:animate-bounce"
              alt=""
            />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">
              ACCOUNT
            </p>
          </div>
        ) : (
          <HeaderItems link="/auth/signin" title="SIGNIN" Icon={UserIcon} />
        )}
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
      <UserSidebar
        showUserSidebar={showUserSidebar}
        setUserShowSidebar={setUserShowSidebar}
      />
    </header>
  )
}

export default Header
