const ASSETS = {
    hand: "/img/contact/hand.png",
}

export default function Contact() {
    return (
        <div className="flex flex-col text-center pb-15">
            <h2 className="font-primary text-6xl z-0 translate-y-11 -translate-x-9 text-midnight-soft">
                CONTACT US
                <br />
                TO BUILD YOUR
                <br />
                DREAM PROJECT
            </h2>
            <img src={ASSETS.hand} className="w-full object-contain mb-5 z-10" />
            <h2 className="font-primary text-5xl text-midnight-light">cape4labs@proton.me</h2>
        </div>
    )
}
