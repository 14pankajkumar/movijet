import { useRouter } from "next/router";

function Nav({ genres }) {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex py-1 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {genres.map((item) => {
          return (
            <h2
              key={item.id}
              onClick={() => router.push(`/genre/${item.id}`)}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {item.name}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
