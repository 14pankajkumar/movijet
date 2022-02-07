const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // An array with your links
    const links = [
        { url: "/", changefreq: "daily", priority: 0.3 },
        { url: "/top-rated", changefreq: "daily", priority: 0.3 },
        { url: "/trending", changefreq: "daily", priority: 0.3 },
    ]

    // Add other pages
    // const pages = ["/courses", "/contact", "/newsletter", "/blog"];
    // pages.map((url) => {
    //     links.push({
    //         url,
    //         changefreq: "daily",
    //         priority: 0.9,
    //     });
    // });

    // Create a stream to write to
    const stream = new SitemapStream({
        hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data: any) => data.toString());

    res.end(xmlString);

};