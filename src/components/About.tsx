import Image from "next/image"

const FOLDER_COUNT = 9
const ASSETS = {
    center: "/img/info/escaper.png",
    folder: "/img/info/folder.png",
}

export default function About() {
    return (
        <main className="relative flex max-w-5/6 h-auto flex-col items-center justify-center md:justify-around py-12 px-6 md:flex-row md:px-12">
            {/* Content Section */}
            <article className="max-w-prose text-center leading-relaxed text-midnight md:w-1/2 md:text-left md:text-xl">
                <h2 className="mb-4 text-5xl font-bold font-secondary">About Our System</h2>
                <p>
                    BASEMALL is a decentralized data marketplace that empowers individuals and
                    businesses to share, monetize, and access high-quality data with full
                    transparency and trust. In today’s world, data is one of the most valuable
                    assets — yet it is often locked within silos, underutilized, or traded without
                    fairness. BASEMALL changes that by creating a secure, user-friendly ecosystem
                    where: Data providers can list and monetize their datasets safely, maintaining
                    control and ownership. Data buyers can easily discover, purchase, and integrate
                    reliable datasets for AI models, analytics, and innovation. Developers &
                    enterprises can build on top of BASEMALL’s infrastructure, unlocking new
                    possibilities for data-driven products and services. By combining blockchain
                    technology with transparent pricing and identity verification, BASEMALL ensures
                    trust, accountability, and fair value exchange for all participants. Whether you
                    are a researcher, a startup, or a global company, BASEMALL is your gateway to a
                    new era of open, ethical, and collaborative data economy. cape.
                </p>
            </article>

            {/* Animation Section */}
            <section className="relative flex aspect-square max-w-100 items-center justify-center">
                <RotatingFolders />
            </section>
        </main>
    )
}

function RotatingFolders() {
    return (
        <div className="relative flex h-full w-full justify-center border">
            {/* Center Image */}
            <div className="relative z-10 w-56 h-56 overflow-hidden p-2">
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
            <div className="relative h-20 w-20">
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
