import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps, Media } from '@/payload-types'

import { Media as MediaComponent } from '../../components/Media'

type MediaType = {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  media: number | Media
}

type Props = MediaBlockProps & {
  title?: string
  anchor?: string
  medias: MediaType[]
}

export const MediaGrid: React.FC<Props> = (props) => {
  const { title, anchor, medias } = props

  return (
    <div className="container my-16">
      <h1 className="text-2xl" id={anchor ?? `heading_${title?.toLowerCase()}`}>
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-2">
        {medias &&
          medias.length > 0 &&
          medias.map((media, index) => (
            <div key={`media_${index}`}>
              <MediaComponent
                imgClassName={cn('border border-border rounded-[0.8rem]')}
                resource={media.media}
                src={media.staticImage}
              />
            </div>
          ))}
      </div>

      {/* {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )} */}
    </div>
  )
}
