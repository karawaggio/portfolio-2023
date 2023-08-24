import Image from "next/image"
import sklogo from "public/sk-logo.svg"

function HeroSection() {
    return(
        <section className="xs-max:p-4 xs-min:mx-4 xs-min:mb-4 sm-md:pt-36 sm-md:pb-28 bg-light-grey text-center md-min:p-28 rounded">
          <div className="md2-min:p-12 my-12">
            <figure className="mb-4">
                <Image className="xs-max:block xs-min:hidden w-logo-width h-logo-height mt-24 mx-auto mb-12" src={sklogo} alt="Sergey Karavaev logo SVG"/>
            </figure>
            <h1 className="md-max:text-h1heromd md-min:text-h1herolg text-dark leading-extra-relaxed mb-2">Developer & Designer</h1>
            <h2 className="md-max:text-h2heromd md-min:text-h2herolg text-dark leading-extra-relaxed mt-2 mb-2">Sergey Karavaev</h2>
            <a className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                            md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded" 
                href="#projects">
                See my work
            </a>
          </div>
          <div id="projects">{/* This div is used to navigate to projects section */}</div>
        </section>
    );
}

export default HeroSection;
