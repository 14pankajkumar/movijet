import { gql, request } from "graphql-request"

const graphAPI = process.env.NEXT_PUBLIC_GRAPH_API_KEY

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

export const saveUser = async (obj: object) => {
    const result = await fetch("/api/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    })

    return result.json()
}

export const getUser = async (uid: string | null | undefined) => {
    const query = gql`
        query GetUser($uid: String) {
            account(where: {uid: $uid}) {
                id
                uid
                username
                name
                email
                profileImageUrl
                profileImage {
                url
                }
            }
        }     
    `

    const result = await request(graphAPI, query, { uid })
    return result.account
}