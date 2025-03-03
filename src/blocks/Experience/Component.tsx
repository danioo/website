import React from 'react'

import type { ExperienceBlock as ExperienceBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import { useFormatter } from 'next-intl'

export const ExperienceBlock: React.FC<ExperienceBlockProps> = (props) => {
  const { title, anchor, experienceEntries } = props
  const format = useFormatter()

  return (
    <div className="container my-16">
      <h1 className="text-2xl" id={anchor ?? `heading_${title?.toLowerCase()}`}>
        {title}
      </h1>

      <div className="my-5">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
          {experienceEntries &&
            experienceEntries.length > 0 &&
            // experienceEntries.sort((entryA, entryB) => entryA.startDate > entryB.startDate)
            experienceEntries.map((entry, index) => (
              <li
                key={entry.id ?? `experienceEntry_${index}`}
                className={cn(index % 2 === 1 && 'timeline-shift')}
              >
                <div className="timeline-middle h-16">
                  <span className="bg-info/20 flex size-8 items-center justify-center rounded-full">
                    <span className="icon-[tabler--tooltip] text-info size-5" />
                  </span>
                </div>
                <div
                  className={cn(
                    index % 2 === 1 ? 'timeline-end' : 'timeline-start',
                    'me-4 mt-8 max-md:pt-2',
                  )}
                >
                  <div className="text-base-content/50 text-sm font-normal">
                    <time className="mb-2 mr-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {format.dateTime(new Date(entry.startDate), {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    {entry.endDate && (
                      <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {`- ${format.dateTime(new Date(entry.endDate), {
                          month: 'short',
                          year: 'numeric',
                        })}`}
                      </time>
                    )}
                  </div>
                </div>
                <div
                  className={cn(index % 2 === 1 ? 'timeline-start' : 'timeline-end', 'ms-4 mb-8')}
                >
                  <div className="card">
                    <div className="card-body gap-4">
                      <h5 className="card-title text-lg">{entry.title}</h5>

                      <RichText data={entry.description}></RichText>
                    </div>
                  </div>
                </div>
                <hr />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
