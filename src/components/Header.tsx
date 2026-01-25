const ASSETS = {
    bg1: "/img/nav/bg1.png",
    bg2: "/img/nav/bg2.png",
    bg3: "/img/nav/bg3.png",
    bg4: "/img/nav/bg4.png",

    flower1: "/img/nav/flower1.png",
    flower2: "/img/nav/flower2.png",
    flower3: "/img/nav/flower3.png",
    flower4: "/img/nav/flower4.png",
}

export default function Header() {
    return (
        <header className="flex w-4/6 m-auto h-24 mt-10 translate-x-10 font-primary">
            <Section backgroundImageSource={ASSETS.bg1} text="INTRO" href="#intro" />
            <Flower imageSource={ASSETS.flower1} />
            <Section backgroundImageSource={ASSETS.bg2} text="PROJECTS" href="#projects" />
            <Flower imageSource={ASSETS.flower2} />
            <Section backgroundImageSource={ASSETS.bg3} text="TEAM" href="#team" />
            <Flower imageSource={ASSETS.flower3} />
            <Section backgroundImageSource={ASSETS.bg4} text="CONTACT US" href="#contact" />
            <Flower imageSource={ASSETS.flower4} />
        </header>
    )
}

function Flower({ imageSource }: { imageSource: string }) {
    return <img src={imageSource} alt="flower" />
}

function Section({
    backgroundImageSource,
    text,
    href,
}: {
    backgroundImageSource: string
    text: string
    href: string
}) {
    return (
        <a
            href={href}
            className="relative flex items-center justify-center flex-1 transition-all duration-300 hover:brightness-110 max-h-full"
        >
            <img
                src={backgroundImageSource}
                alt="abstract background"
                className="absolute h-full"
            />
            <h2 className="text-white font-bold text-xl lg:text-2xl">{text}</h2>
        </a>
    )
}
