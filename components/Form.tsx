import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { submitComment } from '../graphql'

interface IFromInput {
  name: string
  email: string
  comment: string
  id: string
}

interface Props {
  id: string
}

const Form = ({ id }: Props) => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFromInput>()

  const onSubmit: SubmitHandler<IFromInput> = (data) => {
    submitComment(data)
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
      >
        <h3 className="text-sm text-yellow-500">Enjoyed this movie ?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="mt-2 py-3" />

        <input
          {...register('id', { required: true })}
          type="text"
          value={id}
          hidden
        />

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
          <span>Comment</span>
          <textarea
            {...register('comment', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 text-black shadow outline-none ring-yellow-500 focus:ring"
            rows={8}
            placeholder="Comment"
          />
        </label>

        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">The Name field is required</span>
          )}
          {errors.email && (
            <span className="text-red-500">The Email field is required</span>
          )}
          {errors.comment && (
            <span className="text-red-500">The Comment field is required</span>
          )}
        </div>

        <input
          className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
          type="submit"
        />

        {submitted && (
          <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
            <h3 className="text-3xl font-bold">
              Thank you for submitting your comment
            </h3>
          </div>
        )}
      </form>
    </div>
  )
}

export default Form
