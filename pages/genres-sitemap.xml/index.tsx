import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Genres } from '../../utilities/typing'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data.genres)

  const fields: ISitemapField[] = genreData.map((item: Genres) => ({
    loc: `https://movijet.vercel.app/genre/${item.id}?=${item.name}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
