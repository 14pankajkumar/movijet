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
    mutation CreateContactUs(
      $name: String!
      $email: String!
      $message: String!
    ) {
      createContactUs(data: { name: $name, email: $email, message: $message }) {
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
