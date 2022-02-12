// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_API_KEY

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_AUTH_KEY}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $id: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          medias: { connect: { Media: { mediaId: $id } } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

export default handler
