interface Props {
  showUserSidebar: boolean
  setUserShowSidebar: Function
}

import {
  UserCircleIcon,
  LogoutIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const UserSidebar = ({ showUserSidebar, setUserShowSidebar }: Props) => {
  const { data: session } = useSession()
  return (
    <>
      {showUserSidebar ? (
        <button
          className="fixed left-5 top-5 z-50 flex cursor-pointer items-center text-4xl text-white"
          onClick={() => setUserShowSidebar(!showUserSidebar)}
        >
          <XCircleIcon className="mb-1 h-8" />
        </button>
      ) : (
        ''
      )}

      <div
        className={`fixed top-0 left-0 z-40 h-full  w-8/12 border-x border-[#0c3f50] bg-[#061d25] px-5 text-gray-300 duration-300 ease-in-out md:w-[35vw] ${
          showUserSidebar ? '-translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <div className="mt-16 h-full w-full p-5">
          <div className="group flex h-full w-full flex-col">
            <Link href={`/user/${session?.user?.username}`}>
              <div className="flex cursor-pointer items-center justify-around p-5 hover:bg-[#06202A] hover:text-white sm:h-20">
                <UserCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
                <p className="text-xs tracking-widest md:text-lg">PROFILE</p>
              </div>
            </Link>

            <div
              onClick={() => signOut()}
              className="flex cursor-pointer items-center justify-around p-5 hover:bg-[#06202A] hover:text-white sm:h-20"
            >
              <LogoutIcon className="h-5 w-5 md:h-8 md:w-8" />
              <p className="text-xs tracking-widest md:text-lg">LOG OUT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSidebar
