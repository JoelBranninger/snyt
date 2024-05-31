// schemas/index.ts

import menu from './menu'
import meal from './meal'
import category from './categories'
import startPage from './startPage'
import aboutPage from './aboutPage'
import openingHours from './openingHours'
import exceptionalHours from './exceptionalHours'
import regularHours from './regularHours'

export const schemaTypes = [
  category,
  menu,
  meal,
  startPage,
  aboutPage,
  openingHours,
  exceptionalHours,
  regularHours,
]
