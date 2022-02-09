// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function protectedHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (session) {
    return res.status(200).redirect("https://api-ap-south-1.graphcms.com/v2/ckz75lw970b4u01wecxqj51i1/master")
  }

  res.send({
    error: "You must be sign in to view the protected content on this page.",
  })
}