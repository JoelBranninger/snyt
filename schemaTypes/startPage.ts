import { defineField } from 'sanity'
import { CiTextAlignLeft } from 'react-icons/ci'

const startPage = {
  name: 'startPage',
  title: 'Start Page',
  type: 'object',
  icon: CiTextAlignLeft,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingTitle',
      type: 'array',
      title: 'Heading Title',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'headingDescription',
      type: 'array',
      title: 'Heading Description',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'button1',
      title: 'Button 1',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
      ],
    }),
    defineField({
      name: 'button2',
      title: 'Button 2',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
      ],
    }),
    defineField({
      name: 'SlideShowimages',
      title: 'Slide Show Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
}

export default startPage
