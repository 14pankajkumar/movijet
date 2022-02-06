interface Props {
  showSidebar: boolean
  setShowSidebar: Function
}

import {
  StarIcon,
  CollectionIcon,
  LightningBoltIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const Sidebar = ({ showSidebar, setShowSidebar }: Props) => {
  return (
    <>
      {showSidebar ? (
        <button
          className="fixed left-5 top-5 z-50 flex cursor-pointer items-center text-4xl text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <XCircleIcon className="mb-1 h-8" />
        </button>
      ) : (
        ''
      )}

      <div
        className={`fixed top-0 left-0 z-40 h-full  w-8/12 border-x border-[#0c3f50] bg-[#061d25] px-5 text-gray-300 duration-300 ease-in-out md:w-[35vw] ${
          showSidebar ? '-translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <div className="mt-16 h-full w-full p-0 md:p-5">
          <div className="group flex h-full w-full flex-col">
            <Link href="/trending">
              <div className="flex cursor-pointer items-center justify-around p-5 hover:bg-[#06202A] hover:text-white sm:h-20">
                <LightningBoltIcon className="h-5 w-5 md:h-8 md:w-8" />
                <p className="text-xs tracking-widest md:text-lg">TRENDING</p>
              </div>
            </Link>

            <Link href="/collection">
              <div className="flex cursor-pointer items-center justify-around p-5 hover:bg-[#06202A] hover:text-white sm:h-20">
                <CollectionIcon className="h-5 w-5 md:h-8 md:w-8" />
                <p className="text-xs tracking-widest md:text-lg">COLLECTION</p>
              </div>
            </Link>

            <Link href="/top-rated">
              <div className="flex cursor-pointer items-center justify-around p-5 hover:bg-[#06202A] hover:text-white sm:h-20">
                <StarIcon className="h-5 w-5 md:h-8 md:w-8" />
                <p className="text-xs tracking-widest md:text-lg">TOP RATED</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
