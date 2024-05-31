// schemas/aboutPage.js
import { defineField } from 'sanity'
import { CiTextAlignLeft } from 'react-icons/ci'

const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
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
      name: 'headingSection',
      title: 'Heading Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headingTitle',
          type: 'array',
          title: 'Heading Title',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'headingDescription',
          type: 'array',
          title: 'Heading Description',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'button1',
          title: 'Button 1',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
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
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (rule) =>
                rule.required().uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            }),
          ],
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // Enables hotspot editing
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'secondSection',
      title: 'Second Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'text',
          type: 'array',
          title: 'Text',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // Enables hotspot editing
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'thirdSection',
      title: 'Third Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'text',
          type: 'array',
          title: 'Text',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
}

export default aboutPage
