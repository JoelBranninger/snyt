// schemas/openingHours.js
import { defineField, defineType } from 'sanity'
import { CiClock1 } from 'react-icons/ci'

export default defineType({
  name: 'regularHours',
  title: 'Regular Hours',
  type: 'object',
  icon: CiClock1,
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
