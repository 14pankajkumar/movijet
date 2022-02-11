import { Thumbnail } from '.'
import { Results } from '../utilities/typing'

interface Props {
  results: [Results]
}

const ResultsCard = ({ results }: Props) => {
  return (
    <div className="max-w-7xl mx-auto my-5 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />
      })}
    </div>
  )
}

export default ResultsCard
