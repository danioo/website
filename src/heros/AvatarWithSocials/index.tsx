'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Link from 'next/link'

export const AvatarWithSocialsHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  avatar,
  connect,
}) => {
  const { setHeaderTheme } = useHeaderTheme()
  const iconsMap: Map<string, string> = new Map<string, string>([
    ['LinkedIn', 'tabler--brand-linkedin'],
    ['Facebook', 'tabler--brand-facebook'],
    ['Instagram', 'tabler--brand-instagram'],
  ])

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative flex items-center justify-center text-white" data-theme="dark">
      <div className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat bg-lime-600 bg-opacity-85" />
      <div className="container mb-8 z-20 relative flex items-center justify-center">
        <div className="md:text-center">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-lime-400 shadow-xl">
              <div className="avatar">
                <div className="size-64 rounded-full">
                  <Media
                    alt="avatar"
                    resource={avatar && typeof avatar === 'object' ? avatar : undefined}
                    imgClassName="inline size-64 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              {richText && (
                <RichText
                  className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                  data={richText}
                  enableGutter={false}
                />
              )}
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                {connect && (
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <RichText
                      data={connect}
                      className="font-body text-lg pr-2 uppercase text-white"
                    />

                    <span className={`icon-[tabler--chevron-right] size-10 text-lime-400`} />

                    {Array.isArray(links) &&
                      links.length > 0 &&
                      links.map(({ link }, i) => {
                        return (
                          <Link href={link?.url ?? '#'} key={`link_${i}`}>
                            <span
                              className={`icon-[${iconsMap.get(link.label) ?? 'tabler--external-link'}] hover:text-secondary size-7 inline-block align-middle`}
                            />
                          </Link>
                        )
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
