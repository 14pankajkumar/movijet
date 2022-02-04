import { gql, request } from "graphql-request"

const graphAPI: string = `${process.env.GRAPH_API_KEY}`

export const getMedia = async (mediaId: string) => {
    const query = gql`
        query GetMedia($mediaId: String) {
            media(where: {mediaId: $mediaId}) {
                id
                mediaId
                title
                storyLine
                mediaUrl
            }
        }     
    `

    const result = await request(graphAPI, query, { mediaId })
    return result.media
}