import { groq } from 'next-sanity'
import client from './sanity.client'

export async function getMenu() {
  return client.fetch(
    groq`*[_type == "menu"]{
      _id,
      menuName,
      menuDescription,
      meals
    }`
  )
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      name
    }`
  )
}

export async function getStartContent() {
  return client.fetch(
    groq`*[_type == "startPage"]{
      _id,
      title,
      headingTitle,
      headingDescription,
      button1,
      button2
    }`
  )
}

export async function getAboutContent() {
  return client.fetch(
    groq`*[_type == "aboutPage"]{
      _id,
      title,
      headingSection {
        headingTitle,
        headingDescription,
        button1 {
          text,
          link
        },
        button2 {
          text,
          link
        },
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },
          alt
        }
      },
      secondSection {
        title,
        text,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },
          alt
        }
      },
      thirdSection {
        title,
        text,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },
          alt
        }
      },
    }`
  )
}

export async function getRegularHours() {
  return client.fetch(
    groq`*[_type == "regularHours"]{
      _id,
      day,
      openTime,
      closeTime
    }`
  )
}

export async function getExceptionalHours() {
  return client.fetch(
    groq`*[_type == "exceptionalHours"]{
      _id,
      day,
      openTime,
      closeTime
    }`
  )
}

export async function getOpeningHours() {
  return client.fetch(
    groq`*[_type == "openingHours"]{
      _id,
      regularHours,
      exceptionalHours
    }`
  )
}
