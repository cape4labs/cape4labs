import Header from "../components/Header"
import About from "../components/About"

export default function Home() {
    return (
        <div className="flex flex-col h-screen overflow-y-scroll bg-white">
            <Header />
            <About />
        </div>
    )
}
