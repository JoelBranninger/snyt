// schemas/category.ts

import { defineField } from 'sanity'
import { BiCategory } from 'react-icons/bi'
const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiCategory,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
}

export default category
