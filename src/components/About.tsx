import Image from "next/image"

const FOLDER_COUNT = 12
const ASSETS = {
    center: "/img/info/escaper.png",
    folder: "/img/info/folder.png",
}

export default function About() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:justify-around md:px-12">
            {/* Content Section */}
            <article className="max-w-prose text-center text-lg leading-relaxed text-midnight md:w-1/2 md:text-left md:text-xl">
                <h2 className="mb-4 text-3xl font-bold">About Our System</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum ratione
                    atque reiciendis corrupti! Aperiam voluptas delectus vel voluptate ducimus ab
                    voluptatem, sit labore corrupti accusamus distinctio? Dolorum, fugiat deserunt.
                </p>
            </article>

            {/* Animation Section */}
            <section className="relative flex aspect-square w-full max-w-100 items-center justify-center md:w-1/2 md:max-w-none">
                <RotatingFolders />
            </section>
        </main>
    )
}

function RotatingFolders() {
    return (
        <div className="relative flex h-full w-full items-center justify-center">
            {/* Center Image */}
            <div className="relative z-10 h-24 w-24 overflow-hidden p-2 md:h-32 md:w-32">
                <Image
                    src={ASSETS.center}
                    alt="Central icon"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Rotating Ring */}
            <div className="absolute inset-0 animate-spin-slow [--radius:-140px] md:[--radius:-220px]">
                {Array.from({ length: FOLDER_COUNT }).map((_, i) => (
                    <Folder key={i} index={i} />
                ))}
            </div>
        </div>
    )
}

function Folder({ index }: { index: number }) {
    const angle = (index / FOLDER_COUNT) * 360

    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
            style={{
                transform: `rotate(${angle}deg) translateY(var(--radius))`,
            }}
        >
            <div className="relative h-12 w-12 md:h-16 md:w-16">
                <Image
                    src={ASSETS.folder}
                    alt={`Folder ${index + 1}`}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}
