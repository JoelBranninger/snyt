import { PortableTextBlock } from '@portabletext/react'

export type MealType = {
  _id: string
  _key: string
  name: string
  description: string
  price: string
  category: string[]
}

export type MenuType = {
  _id: string
  menuName: PortableTextBlock[]
  menuDescription: PortableTextBlock[]
  meals: MealType[]
}

export type CategoryType = {
  _id: string
  name: string
}

export type ButtonType = {
  text: string
  link: string
}

export type StartType = {
  _id: string
  headingTitle: PortableTextBlock[]
  headingDescription: PortableTextBlock[]
  button1: ButtonType
  button2: ButtonType
}

export type ImageType = {
  asset: {
    _id: string
    url: string
    metadata: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
  alt: string
}

export type SectionType = {
  title: PortableTextBlock[]
  text: PortableTextBlock[]
  image: ImageType
}

export type AboutType = {
  _id: string
  title: string
  headingSection: {
    headingTitle: PortableTextBlock[]
    headingDescription: PortableTextBlock[]
    button1: ButtonType
    button2: ButtonType
    image: ImageType
  }
  secondSection: SectionType
  thirdSection: SectionType
}

export type regularHoursType = {
  day: string
  openTime: string
  closeTime: string
  _key: string
}

export type exceptionalHoursType = {
  day: string
  openTime: string
  closeTime: string
  _key: string
}

export type OpeningHourType = {
  regularHours: regularHoursType[]
  exceptionalHours: exceptionalHoursType[]
}
