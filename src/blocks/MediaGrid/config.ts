import type { Block } from 'payload'

export const MediaGrid: Block = {
  slug: 'mediaGrid',
  interfaceName: 'MediaGrid',
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
      name: 'medias',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
