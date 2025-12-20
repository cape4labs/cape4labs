import Image from "next/image"

export default function Header() {
    return (
        <header className="flex flex-row bg-midnight w-full h-28 sticky justify-center font-primary">
            <Logo />
            <Section backgroundImageSource="/img/nav/first-nav-bg.png" text="About" />
            <Flower imageSource="/img/nav/first-nav-flower.png" />
            <Section backgroundImageSource="/img/nav/second-nav-bg.png" text="Team" />
            <Flower imageSource="/img/nav/second-nav-flower.png" />
            <Section backgroundImageSource="/img/nav/third-nav-bg.png" text="Projects" />
            <Flower imageSource="/img/nav/third-nav-flower.png" />
            <Section backgroundImageSource="/img/nav/fourth-nav-bg.png" text="Contact" />
            <Flower imageSource="/img/nav/fourth-nav-flower.png" />
        </header>
    )
}

function Logo() {
    return (
        <div className="flex items-center justify-center bg-white text-midnight ">
            <h1 className="font-bold text-start sm:text-2xl md:text-4xl lg:text-4xl">
                Cape⁴
                <br />
                labs
            </h1>
        </div>
    )
}

function Flower({ imageSource: source }: { imageSource: string }) {
    return (
        <div className="flex items-center justify-center bg-white text-midnight ">
            <Image
                src={source}
                alt="flower"
                width={100}
                height={100}
                className="h-full w-full"
                quality={100}
            />
        </div>
    )
}

function Section({ backgroundImageSource, text }: { backgroundImageSource: string; text: string }) {
    return (
        <div className="relative h-full flex items-center justify-center overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Image
                src={backgroundImageSource}
                alt="abstract background"
                fill
                className="object-cover absolute inset-0 z-0"
                unoptimized
            />
            <div className="relative z-10 sm:px-2 md:px-2 lg:px-2 xl:px-4">
                <h2 className="text-white text-start sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                    {text}
                </h2>
            </div>
        </div>
    )
}
