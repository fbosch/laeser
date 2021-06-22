import React from 'react'
import Image from 'next/image'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-12 h-screen border-gray-400">
        <div className="bg-gray-50 border-r col-span-1 md:col-span-2 lg:col-span-2 min-w-10">
          <header className="h-14 border-b flex items-center px-3">
            <figure className="inline-block pt-2">
              <Image
                src="/logo.svg"
                height={25}
                width={50}
                alt="logo"
                className="object-contain"
              />
            </figure>
            <h1 className="text-xl text-gray-600">Læser</h1>
          </header>
          <nav></nav>
        </div>
        <main className="grid grid-cols-10 col-span-10">{children}</main>
      </div>
    </>
  )
}
