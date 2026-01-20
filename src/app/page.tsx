import Header from "../components/Header"
import About from "../components/About"
import Team from "../components/Team"
import Footer from "../components/Footer"
import Artwork from "../components/Artwork"
import Projects from "../components/Projects"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="artwork" className="w-full mt-10">
                <Artwork />
            </section>
            <Projects />
            <section id="team">
                <Team />
            </section>
            <Footer />
        </div>
    )
}
