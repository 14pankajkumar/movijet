import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Footer, Header, Heading, Nav } from '../components'
import { Genres } from '../utilities/typing'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { submitContact } from '../graphql'

interface IFromInput {
  name: string
  email: string
  message: string
  id: string
}

interface Props {
  genres: [Genres]
}

const Policy = ({ genres }: Props) => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFromInput>()

  const onSubmit: SubmitHandler<IFromInput> = (data) => {
    submitContact(data)
      .then((res) => {
        console.log(res)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <div>
      <Head>
        <title>
          MoviJet || Get the latest information about your favourite movies and
          TV shows. || Download and watch the latest Movies and TV shows.
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Movijet where you can get the latest information about your favourite movies and
          TV shows. Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="movies to watch on netflix, movies to watch on prime, Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
        />
      </Head>

      <Header />

      {/* Navbar */}
      <Nav genres={genres} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-5 mb-10 flex max-w-2xl flex-col p-5"
      >
        <h4 className="text-3xl font-bold">Contact Us!</h4>
        <hr className="mt-2 py-3" />

        <label className="mb-5 block">
          <span>Name</span>
          <input
            {...register('name', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 text-black shadow outline-none ring-yellow-500 focus:ring"
            type="text"
            placeholder="Name"
          />
        </label>
        <label className="mb-5 block">
          <span>Email</span>
          <input
            {...register('email', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 text-black shadow outline-none ring-yellow-500 focus:ring"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="mb-5 block">
          <span>Message</span>
          <textarea
            {...register('message', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 text-black shadow outline-none ring-yellow-500 focus:ring"
            rows={8}
            placeholder="message"
          />
        </label>

        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">The Name field is required</span>
          )}
          {errors.email && (
            <span className="text-red-500">The Email field is required</span>
          )}
          {errors.message && (
            <span className="text-red-500">The Message field is required</span>
          )}
        </div>

        <input
          className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
          type="submit"
        />

        {submitted && (
          <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
            <h3 className="text-3xl font-bold">Thank you for contacting us.</h3>
          </div>
        )}
      </form>

      <Footer />
    </div>
  )
}

export default Policy

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const genreData = await axios
    .get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)

  return {
    props: {
      genres: genreData.genres,
    },
    revalidate: 60,
  }
}
