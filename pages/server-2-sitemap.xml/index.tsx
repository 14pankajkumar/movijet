import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Results, Genres } from '../../utilities/typing'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data.genres)

  const discoverData = await axios
    .get(
      `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then((res) => res.data.results)

  const fields: ISitemapField[] = discoverData.map((item: Results) => ({
    loc: `https://movijet.vercel.app/media/${item.id}?title=${item.title
      .toLowerCase()
      .replace(' ', '-')}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
