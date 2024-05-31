// schemas/exceptionalHours.js
import { defineField, defineType } from 'sanity'
import { CiWarning } from 'react-icons/ci'

export default defineType({
  name: 'exceptionalHours',
  title: 'Exceptional Hours',
  type: 'object',
  icon: CiWarning,
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
    }),
    defineField({
      name: 'openTime',
      title: 'Open Time',
      type: 'string',
    }),
    defineField({
      name: 'closeTime',
      title: 'Close Time',
      type: 'string',
    }),
  ],
})
