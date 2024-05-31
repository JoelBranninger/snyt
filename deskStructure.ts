import { CiTextAlignLeft, CiClock1 } from 'react-icons/ci' // Import the necessary icons

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('StartPage')
        .id('startPageItem') // Ensure this ID is unique
        .icon(CiTextAlignLeft) // Set the icon for the list item
        .child(S.document().schemaType('startPage').documentId('startPage')),
      S.listItem()
        .title('About Page')
        .id('aboutPageItem') // Ensure this ID is unique
        .icon(CiTextAlignLeft) // Set the icon for the about page
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Opening Hours')
        .id('openingHoursItem') // Ensure this ID is unique
        .icon(CiClock1) // Set the icon for the about page
        .child(
          S.document().schemaType('openingHours').documentId('openingHours')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId())
      ),
    ])
