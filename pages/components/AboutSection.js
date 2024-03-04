import Image from "next/image"
import portrait from "public/sk-portrait.jpg"

function AboutSection() {
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
          <div className="py-4 px-8 my-12 mx-auto">
            <h2 className="md-max:text-center md-max:text-h2sectionmd md-min:text-h2sectionlg leading-normal text-dark">About me</h2>
            <article className="mt-6">
              <p className="text-dark-grey text-ox">Hello, my name is Sergey. I’m an enthusiastic full-stack web developer with five years of experience passionate about 
                        web technologies, visual design, UX/UI, and project management.</p>
            </article>
            <article className="mt-6">
              <p className="text-dark-grey text-ox">I have hands-on experience creating custom and CMS websites. I specialize in ReactJS, JavaScript, TypeScript, jQuery, NextJS, 
                        HTML5/CSS3, SASS, Tailwind, PHP, MySQL, WordPress, Gutenberg, etc.</p>
            </article>
            <article className="mt-6">
              <p className="text-dark-grey text-ox">Posses strong problem-solving, creative/technical thinking, time management, communication, and organizational skills.</p>
            </article>
            <article className="mt-6">
              <p className="text-dark-grey text-ox">I strive to make a positive impact in the world through cutting edge digital products and keep on top of emerging web
                        technology by learning new languages and frameworks.</p>
            </article>
            <figure className="my-10 w-1/3">
                <Image src={portrait} alt="An image of Sergey Karavaev, developer and designer"/>
            </figure>
          </div>
        </section>
    );
}

export default AboutSection;