import FlipMove from 'react-flip-move'
import { Thumbnail } from '.'
import { Results } from '../utilities/typing'

interface Props {
  results: [Results]
}

function ResultsCard({ results }: Props) {
  return (
    <FlipMove className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />
      })}
    </FlipMove>
  )
}

export default ResultsCard
