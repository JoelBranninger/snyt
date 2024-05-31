import Image from 'next/image'
import Link from 'next/link'
import { getAboutContent, getOpeningHours } from '../../../sanity/sanity.query'
import type { AboutType, OpeningHourType } from '../../../types'
import { dancingScript } from '../layout'
import { PortableText } from '@portabletext/react'

export default async function Home() {
  const content: AboutType[] = await getAboutContent()
  const openingHours: OpeningHourType[] = await getOpeningHours()

  console.log(openingHours[0])
  return (
    <main className="z-30">
      <section className="md:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 gap-20">
        <div className="w-full relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row">
          <div className="flex items-center py-5">
            <div className="text-left">
              <div
                className={`${dancingScript.className} text-8xl leading-10 tracking-tight text-black sm:leading-none`}
              >
                <PortableText value={content[0].headingSection.headingTitle} />
              </div>
              <div className="font-regular max-w-md mx-auto mt-3 text-base text-black md:mt-5 md:max-w-3xl">
                <PortableText
                  value={content[0].headingSection.headingDescription}
                />
              </div>
              <div className="mt-5 sm:flex md:mt-8 gap-6">
                <Link
                  href={content[0].headingSection.button1.link}
                  className="w-fit shadow flex items-center justify-center px-11 py-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green border border-transparent hover:shadow-xl"
                >
                  {content[0].headingSection.button1.text}
                </Link>
                <Link
                  href={content[0].headingSection.button2.link}
                  className="w-fit shadow flex items-center justify-center px-11 py-4 text-base font-medium leading-6 text-black border-green transition duration-150 ease-in-out border hover:shadow-xl"
                >
                  {content[0].headingSection.button2.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center py-20 ">
          <div className="relative w-full">
            <div className="rounded-lg bg-white text-black w-full">
              <Image
                src={content[0].headingSection.image.asset.url}
                width={
                  content[0].headingSection.image.asset.metadata.dimensions
                    .width
                }
                height={
                  content[0].headingSection.image.asset.metadata.dimensions
                    .height
                }
                alt="Hero Image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-secondBackground">
        <section className="md:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 gap-20">
          <div className="flex items-center py-20 ">
            <div className="relative w-full">
              <div className="rounded-lg bg-white text-black w-full">
                <Image
                  src={content[0].secondSection.image.asset.url}
                  width={
                    content[0].secondSection.image.asset.metadata.dimensions
                      .width
                  }
                  height={
                    content[0].secondSection.image.asset.metadata.dimensions
                      .height
                  }
                  alt="Hero Image"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row">
            <div className="flex items-center py-5">
              <div className="text-left">
                <div
                  className={`${dancingScript.className} text-8xl leading-10 tracking-tight text-black sm:leading-none`}
                >
                  <PortableText value={content[0].secondSection.title} />
                </div>
                <div className="font-regular max-w-md mx-auto mt-3 text-base text-black md:mt-5 md:max-w-3xl">
                  <PortableText value={content[0].secondSection.text} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className=" md:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 gap-20">
        <div className="w-full relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row">
          <div className="flex items-center py-5">
            <div className="text-left">
              <div
                className={`${dancingScript.className} text-8xl leading-10 tracking-tight text-black sm:leading-none`}
              >
                <PortableText value={content[0].thirdSection.title} />
              </div>
              <h3 className="font-medium text-xl mt-16 mb-6">
                Ordinarie öppetider
              </h3>
              {openingHours[0].regularHours.map((regularHour) => (
                <div
                  key={regularHour._key}
                  className="flex items-center space-x-4 mb-4"
                >
                  <p className="flex-shrink-0">{regularHour.day}</p>
                  <div className="custom-border flex-grow h-[2px] mx-2" />
                  <p className="flex-shrink-0">
                    {regularHour.openTime}
                    {regularHour.closeTime ? ' - ' + regularHour.closeTime : ''}
                  </p>
                </div>
              ))}
              <h3 className="font-medium text-xl mt-16 mb-6">Avvikelser</h3>
              {openingHours[0].exceptionalHours.map((exceptionalHour) => (
                <div
                  key={exceptionalHour._key}
                  className="flex items-center space-x-4 mb-4"
                >
                  <p className="flex-shrink-0">{exceptionalHour.day}</p>
                  <div className="custom-border flex-grow h-[2px] mx-2" />
                  <p className="flex-shrink-0">
                    {exceptionalHour.openTime}
                    {exceptionalHour.closeTime
                      ? ' - ' + exceptionalHour.closeTime
                      : ''}
                  </p>
                </div>
              ))}
              <div className="font-regular max-w-md mx-auto mt-3 text-base text-black md:mt-5 md:max-w-3xl">
                {/* <PortableText value={openingHours[0].regularHours} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center py-20 ">
          <div className="relative w-full">
            <div className="rounded-lg bg-white text-black w-full">
              <Image
                src={content[0].thirdSection.image.asset.url}
                width={
                  content[0].thirdSection.image.asset.metadata.dimensions.width
                }
                height={
                  content[0].thirdSection.image.asset.metadata.dimensions.height
                }
                alt="Hero Image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
