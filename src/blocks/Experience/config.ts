import type { Block } from 'payload'

export const ExperienceEntry: Block = {
  slug: 'experienceEntry',
  interfaceName: 'ExperienceEntry',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
    },
  ],
}

export const Experience: Block = {
  slug: 'experienceBlock',
  interfaceName: 'ExperienceBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'anchor',
      type: 'text',
    },
    {
      name: 'experienceEntries',
      type: 'array',
      fields: ExperienceEntry.fields,
    },
  ],
}
