"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleScroll = (href: string) => {
        const element = document.getElementById(href.replace("#", ""))
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setMobileMenuOpen(false) 
    }

    return (
        <>
            <header className="hidden sm:flex flex-row bg-midnight w-full h-28 sticky top-0 z-10 justify-center font-primary">
                <Logo />
                <Section backgroundImageSource="/img/nav/first-nav-bg.png" text="About" href="#about" onClick={handleScroll} />
                <Flower imageSource="/img/nav/third-nav-flower.png" />

                <Section backgroundImageSource="/img/nav/second-nav-bg.png" text="Team" href="#team" onClick={handleScroll} />
                <Flower imageSource="/img/nav/second-nav-flower.png" />
                <Section backgroundImageSource="/img/nav/third-nav-bg.png" text="Projects" href="#projects" onClick={handleScroll} />
                <Flower imageSource="/img/nav/third-nav-flower.png" />
                <Section backgroundImageSource="/img/nav/fourth-nav-bg.png" text="Contact" href="#contact" onClick={handleScroll} />
                <Flower imageSource="/img/nav/fourth-nav-flower.png" />
            </header>

            <header className="sm:hidden flex items-center justify-between bg-midnight w-full h-20 sticky top-0 z-50">
                <LogoMobile />
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white text-3xl focus:outline-none px-6"
                >
                    =
                </button>
            </header>

            {mobileMenuOpen && (
                <div className="sm:hidden fixed  top-20 z-40 shadow-lg max-w-full overflow-x-hidden w-full">
                    <nav className="flex flex-col bg-white">
                        <div className="flex flex-row items-center">
                            <Section backgroundImageSource="/img/nav/first-nav-bg.png" text="About" href="#about" onClick={handleScroll} />
                            <Flower imageSource="/img/nav/third-nav-flower.png" />
                        </div>

                        <div className="flex flex-row items-center">
                            <Section backgroundImageSource="/img/nav/second-nav-bg.png" text="Team" href="#team" onClick={handleScroll} />
                            <Flower imageSource="/img/nav/second-nav-flower.png" />
                        </div>
                        <div className="flex flex-row items-center overflow-x-hidden">
                            <Section backgroundImageSource="/img/nav/third-nav-bg.png" text="Projects" href="#projects" onClick={handleScroll} />
                            <Flower imageSource="/img/nav/third-nav-flower.png" />
                        </div>
                        <div className="flex flex-row items-center ">
                            <Section backgroundImageSource="/img/nav/fourth-nav-bg.png" text="Contact" href="#contact" onClick={handleScroll} />
                            <Flower imageSource="/img/nav/fourth-nav-flower.png" />
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

function Logo() {
    return (
        <div className="flex items-center justify-center bg-white text-midnight h-full px-8">
            <h1 className="font-bold text-2xl lg:text-2xl">
                Cape⁴
                <br />
                labs
            </h1>
        </div>
    )
}

function LogoMobile() {
    return (
        <div className="bg-white text-midnight h-full w-1/5 flex items-center justify-center font-primary">
            <h1 className="font-bold text-2xl text-start">
                Cape⁴<br />labs
            </h1>
        </div>
    )
}

function Flower({ imageSource: source }: { imageSource: string }) {
    return (
        <div className="items-center justify-center bg-white text-midnight h-1/4 
                        sm:hidden lg:flex sm:h-full">
            <Image
                src={source}
                alt="flower"
                width={100}
                height={100}
                className="h-full w-full object-contain"
            />
        </div>
    )
}

function Section({
    backgroundImageSource,
    text,
    onClick,
    href,
}: {
    backgroundImageSource: string
    text: string
    onClick: (href: string) => void
    href: string
}) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                onClick(href)
            }}
            className="relative  flex items-center justify-center overflow-hidden cursor-pointer 
                       flex-1 transition-all duration-300 hover:brightness-110 bg-midnight h-26 sm:h-full
                       "
        >
            <Image
                src={backgroundImageSource}
                alt="abstract background"
                fill
                className="object-cover absolute inset-0 z-0 h-full w-full"
                unoptimized
            />
            <div className="relative z-10 px-4">
                <h2 className="text-white text-xl lg:text-2xl font-primary">{text}</h2>
            </div>
        </button>
    )
}