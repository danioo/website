import type { Block } from 'payload'

export const Skills: Block = {
  slug: 'skills',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 0,
      required: true,
    },
  ],
  interfaceName: 'SkillsBlock',
}
