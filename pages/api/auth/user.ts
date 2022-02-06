// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_API_KEY

const user = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_AUTH_KEY}`,
    }
  })

  const query = gql`
    mutation MyMutation(
      $uid: String!
      $email: String!
      $name: String!
      $username: String!
      $profileImageUrl: String!
    ) {
      createAccount(
        data: {
          uid: $uid, 
          email: $email, 
          name: $name, 
          username: $username
          profileImageUrl: $profileImageUrl
        }
      ) {
        uid
      }
    }
  
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    try {
      const accountId = result.createAccount.uid;

      const publishAccount = gql`
            mutation PublishAccount($uid: String!) {
                publishAccount(where: {uid: $uid}, to: PUBLISHED) {
                    uid
                }
            }
        `;

      const publishResult = await graphQLClient.request(publishAccount, { uid: accountId });

      res.status(200).send(publishResult)

    } catch (error) {
      res.status(400).send(error)

    }

  } catch (error) {
    res.status(500).send(error)
  }

}

export default user