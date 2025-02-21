import React from 'react'

type SkillsProps = {
  name: string
  value: number
}

export const Skills: React.FC<SkillsProps> = (props) => {
  const { name, value } = props

  return (
    <>
      <div className="flex mb-1">
        <div className="flex-none uppercase">{name}</div>
        <div className="grow"></div>
        <div className="flex-none text-2xl font-bold">{`${value}%`}</div>
      </div>

      <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-4 bg-lime-600 rounded-full dark:bg-lime-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </>
  )
}
