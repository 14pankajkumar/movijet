import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { HeaderItems } from ".";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
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
            className="object-contain cursor-pointer"
            src="https://links.papareact.com/ua6"
            height={100}
            width={200}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
