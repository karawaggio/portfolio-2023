import Head from "next/head"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import SocialSection from "./components/SocialSection"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <section className="font-titilliumweb">
        <Head>
          <title>Sergey Karavaev | Portfolio</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>

        <main>
          <Header/>
          <HeroSection/>
          <SocialSection/>
        </main>
        
        <Footer/>
    </section>
  )
}
