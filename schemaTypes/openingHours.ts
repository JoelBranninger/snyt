// schemas/openingHoursPage.js
import { defineField, defineType } from 'sanity'
import { CiClock1, CiWarning } from 'react-icons/ci'

export default defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'object',
  icon: CiClock1,
  fields: [
    defineField({
      name: 'regularHours',
      title: 'Regular Hours',
      type: 'array',
      description: 'Add a list of items with name, price, and description',
      of: [{ type: 'regularHours' }],
    }),
    defineField({
      name: 'exceptionalHours',
      title: 'Exceptional Hours',
      type: 'array',
      description: 'Add a list of items with name, price, and description',
      of: [{ type: 'exceptionalHours' }],
    }),
  ],
})
