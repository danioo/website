import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Skills } from '../../components/Skills'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { title, anchor, columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <h1 className="text-2xl" id={anchor ?? `heading_${title?.toLowerCase()}`}>
        {title}
      </h1>

      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size, blocks } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]} text-justify`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {blocks &&
                  blocks.length > 0 &&
                  blocks.map((block) => {
                    if (block.blockType === 'skills') {
                      return (
                        <Skills
                          key={block.id ?? `skills_${block.name.toLowerCase()}`}
                          name={block.name}
                          value={block.value}
                        />
                      )
                    }

                    return null
                  })}

                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
