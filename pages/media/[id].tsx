import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'
import {
  Casts,
  Genres,
  Keyword,
  Media,
  MediaUrl,
  Results,
  Reviews,
  SocialId,
} from '../../utilities/typing'
import {
  CastCard,
  Details,
  Header,
  Hero,
  Nav,
  ReviewsCard,
  VideoCard,
} from '../../components'
import { getMedia } from '../../graphql'

interface Props {
  media: Media
  casts: [Casts]
  mediaUrl: MediaUrl
  genres: [Genres]
  socialId: SocialId
  keyword: Keyword
  reviews: [Reviews]
}

const Media = ({
  media,
  casts,
  mediaUrl,
  genres,
  socialId,
  keyword,
  reviews,
}: Props) => {
  return (
    <div>
      <Head>
        <title>MoviJet - {media.title}</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <Hero media={media} mediaUrl={mediaUrl} socialId={socialId} />

      <CastCard casts={casts} />

      <Details media={media} keyword={keyword} />

      <VideoCard mediaUrl={mediaUrl} media={media} />

      <ReviewsCard reviews={reviews} />
    </div>
  )
}

export default Media

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const getMediaDetails = await axios
    .get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const getCatsData = await axios
    .get(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  const getMediaUrlData = await getMedia(id)

  const getSocialIdData = await axios
    .get(`${BASE_URL}/3/movie/${id}/external_ids?api_key=${API_KEY}`)
    .then((res) => res.data)

  const getKeywordData = await axios
    .get(`${BASE_URL}/3/movie/${id}/keywords?api_key=${API_KEY}`)
    .then((res) => res.data)

  const getReviwsData = await axios
    .get(
      `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
      media: getMediaDetails,
      casts: getCatsData.cast,
      mediaUrl: getMediaUrlData,
      socialId: getSocialIdData,
      keyword: getKeywordData,
      reviews: getReviwsData.results,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const discoverData = await axios
    .get(
      `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then((res) => res.data)

  const paths = discoverData.results.map((item: Results) => ({
    params: {
      id: item.id.toString(),
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
