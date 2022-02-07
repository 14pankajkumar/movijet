import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Results } from '../../utilities/typing'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const discoverData = await axios
    .get(
      `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then((res) => res.data.results)

  console.log(discoverData)

  const fields: ISitemapField[] = discoverData.map((item: Results) => ({
    loc: `https://movijet.vercel.app/media/${item.id}?title=${item.title
      .toLowerCase()
      .replaceAll(' ', '-')}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
