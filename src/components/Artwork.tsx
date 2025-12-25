const ASSETS = {
    folders: "/img/artwork/folders.png",
    hand: "/img/artwork/hand.png",
}
export default function Artwork() {
    return (
        <div className="h-200 lg:h-324 w-full flex flex-col items-center justify-center">
            <img src={ASSETS.folders} className="w-64 h-auto z-9" />
            <img src={ASSETS.hand} className="w-full h-auto object-contain" />
        </div>
    )
}
