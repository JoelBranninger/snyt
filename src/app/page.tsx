import Image from 'next/image'
import Link from 'next/link'
import {
  getMenu,
  getCategories,
  getStartContent,
} from '../../sanity/sanity.query'
import type { MenuType, CategoryType, StartType } from '../../types'
import HeroImg from './images/hero-img.jpg'
import { dancingScript } from './fonts'
import { PortableText } from '@portabletext/react'

export default async function Home() {
  const menu: MenuType[] = await getMenu()
  const categories: CategoryType[] = await getCategories()
  const content: StartType[] = await getStartContent()
  const categoryMap = categories.reduce(
    (acc, category) => {
      acc[category._id] = category.name
      return acc
    },
    {} as Record<string, string>
  )
  const groupedMeals = menu.reduce(
    (acc, menuItem) => {
      menuItem.meals.forEach((meal) => {
        const categoryId =
          typeof meal.category === 'string'
            ? meal.category
            : meal.category['_ref']
        if (!acc[categoryId]) {
          acc[categoryId] = []
        }
        acc[categoryId].push(meal)
      })
      return acc
    },
    {} as Record<string, (typeof menu)[0]['meals']>
  )
  console.log(menu[0].menuName[0].children)
  return (
    <main className="z-30">
      <section className="md:px-16 px-6 max-w-7xl mx-auto flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row">
          <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
            <div className="text-left">
              <div
                className={`${dancingScript.className} text-8xl leading-10 tracking-tight text-black sm:leading-none`}
              >
                <PortableText value={content[0].headingTitle} />
              </div>
              <div className="font-regular max-w-md mx-auto mt-3 text-base text-black md:mt-5 md:max-w-3xl">
                <PortableText value={content[0].headingDescription} />
              </div>
              <div className="mt-5 sm:flex md:mt-8 gap-6">
                <Link
                  href={content[0].button1.link}
                  className="w-fit shadow flex items-center justify-center px-11 py-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green border border-transparent hover:shadow-xl"
                >
                  {content[0].button1.text}
                </Link>
                <Link
                  href={content[0].button2.link}
                  className="w-fit shadow flex items-center justify-center px-11 py-4 text-base font-medium leading-6 text-black border-green transition duration-150 ease-in-out border hover:shadow-xl"
                >
                  {content[0].button2.text}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div className="relative w-full">
              <div className="rounded-lg bg-white text-black w-full">
                <Image src={HeroImg} alt="Hero Image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-secondBackground">
        <section className="md:px-16 px-6 max-w-7xl mx-auto py-16 ">
          <div
            className={`${dancingScript.className} text-5xl leading-10 tracking-tight text-black sm:leading-none`}
          >
            <PortableText value={menu[0].menuName} />
          </div>
          <div className="font-regular max-w-lg mt-3 text-base text-black pb-12">
            <PortableText value={menu[0].menuDescription} />
          </div>
          <div className="grid grid-cols-2 gap-16">
            {Object.keys(groupedMeals).map((categoryId) => (
              <div key={categoryId} className="mb-8">
                <h3
                  className={`${dancingScript.className} text-3xl font-bold mb-4`}
                >
                  {categoryMap[categoryId]}
                </h3>
                <ul className="space-y-4 custom-border pt-2">
                  {groupedMeals[categoryId].map((item) => (
                    <li key={item._key} className="">
                      <div className="flex justify-between">
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <p className="text-lg font-normal">{item.price} kr</p>
                      </div>
                      <p className="text-lg font-light text-gray-700">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
