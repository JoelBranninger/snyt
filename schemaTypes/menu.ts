// schemas/menu.ts

import { defineField } from 'sanity'
import { BiSolidFoodMenu } from 'react-icons/bi'

const menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: BiSolidFoodMenu,
  fields: [
    defineField({
      name: 'menuName',
      title: 'Menu Name',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menuDescription',
      title: 'Menu Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'meals',
      title: 'Meals',
      type: 'array',
      description: 'Add a list of items with name, price, and description',
      of: [{ type: 'meal' }],
    }),
  ],
}

export default menu
