import axios from 'axios'
import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Results } from '../../utilities/typing'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const discoverData = await axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=a7d825c1ff54cc3d8971127a5a76602d&with_genres=28`)
    .then((res) => res.data.results)
    .catch(err => console.log(err)
    )
  
  const fields: ISitemapField[] = discoverData.map((item: Results) => ({
    loc: `https://movijet.vercel.app/media/${item.id}?title=${item.title.toLowerCase().replaceAll(' ', '-')}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Action() {}
