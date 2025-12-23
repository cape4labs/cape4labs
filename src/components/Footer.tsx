import Image from "next/image"

const ASSETS = {
    bg: "/img/footer/bg.png",
    icon: "/img/footer/icon.svg",
}

export default function Footer() {
    return (
        <div className="mt-5 bg-midnight w-full h-8 flex justify-end p-0.75">
            <div className="w-28 mr-1 bg-white text-midnight font-primary px-3 py-0.75 flex gap-2 items-center shrink-0">
                cape.exe
                <img src={ASSETS.icon} className="w-3" />
            </div>
            <img src={ASSETS.bg} className="w-72 overflow-hidden object-cover" />
        </div>
    )
}
