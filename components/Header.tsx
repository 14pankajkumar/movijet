import Image from 'next/image'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { HeaderItems } from '.'

const Header = () => {
  return (
    <header className="m-5 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItems link="/" title="HOME" Icon={HomeIcon} />
        <HeaderItems
          link="/trending"
          title="TRENDING"
          Icon={LightningBoltIcon}
        />
        <HeaderItems link="/" title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems link="/" title="COLLECTION" Icon={CollectionIcon} />
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
    </header>
  )
}

export default Header
