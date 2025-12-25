const FOLDER_COUNT = 9
const ASSETS = {
    center: "/img/info/escaper.png",
    folder: "/img/info/folder.png",
}

export default function About() {
    return (
        <main className="mt-24 relative flex w-full lg:max-w-5/6 h-auto flex-col items-center md:justify-between xl:justify-around py-12 px-6 lg:flex-row md:px-12">
            {/* Content Section */}
            <article className="max-w-prose leading-relaxed text-midnight text-left w-full">
                <h2 className="mb-4 text-3xl font-bold font-secondary w-full">About Our System</h2>
                <p className="font-primary w-full text-xl">
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
            <section className="relative flex aspect-square h-130 sm:h-200 lg:h-auto max-w-100 items-center justify-center">
                <RotatingFolders />
            </section>
        </main>
    )
}

function RotatingFolders() {
    return (
        <div className="relative flex h-full w-full justify-center items-center">
            {/* Center Image */}
            <div className="relative z-9 w-30 h-30 sm:w-40 sm:h-40  lg:w-56 lg:h-56 overflow-hidden p-2 items-center">
                <img src={ASSETS.center} alt="Central icon" className="object-contain" />
            </div>

            {/* Rotating Ring */}
            <div className="absolute inset-0 animate-spin-slow [--radius:-140px] sm:[--radius:-180px]  lg:[--radius:-220px] ">
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
                transform: `rotate(${angle}deg) translateY(var(--radius)) rotate(${-angle}deg)`,
            }}
        >
            <div
                className="relative animate-spin-slow-reverse
                            h-16 w-16
                            sm:h-24 sm:w-24
                            lg:h-30 lg:w-30
                            "
            >
                <img
                    src={ASSETS.folder}
                    alt={`Folder ${index + 1}`}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}
