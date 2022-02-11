import Image from 'next/image'
import React from 'react'
import { Heading } from '.'
import { Media, MediaUrl } from '../utilities/typing'

interface Props {
  mediaUrl: MediaUrl
  media: Media
}

const VideoCard = ({ mediaUrl, media }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type: string
  ) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "link":
        return (
          <a key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </a>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  

  return (
    <div className="max-w-7xl mx-auto relative py-8">
      <Heading title={mediaUrl?.title || media.title} />

      <div className="mb-5 mt-5 ">
        <p className='text-lg'>

          {mediaUrl?.description?.raw?.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item, item.text)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </p>
        </div>
        <div className="mb-5 mt-5 ">
          <h2 className='text-xl font-semibold'>Storyline:</h2>
        <p className='text-lg'>

          {mediaUrl?.storyLine?.raw?.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item, item.text)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </p>
        </div>
        <div className='mb-5 mt-5'>
          <video controls autoPlay={false} poster={`${BASE_URL}${media.backdrop_path}`}>
            <source src={mediaUrl?.video?.url}  />
          </video>
        </div>
    </div>
  )
}

export default VideoCard
