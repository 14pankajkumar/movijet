interface Props {
  title: string
}

const Heading = ({ title }: Props) => {
  return (
    <h1 className="mx-2 mt-10 flex items-center justify-center text-xl font-bold md:mx-auto md:max-w-6xl md:justify-start md:text-3xl">
      {title}
    </h1>
  )
}

export default Heading
