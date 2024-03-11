import Image from "next/image"
import portrait from "public/sk-portrait.jpg"

function AboutSection() {
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
          <div className="py-4 px-8 my-12 mx-auto">
            <h2 className="md-max:text-center md-max:text-h2sectionmd md-min:text-h2sectionlg leading-normal text-dark">About me</h2>
            <section className="flex md-max:flex-col">
              <article>
                <p className="mt-6 text-dark-grey text-ox">Hello, my name is Sergey. I’m an enthusiastic front-end developer with five years of experience passionate about 
                    web technologies, visual design, UX/UI, and project management.</p>
                <p className="mt-6 text-dark-grey text-ox">I have hands-on experience creating custom and CMS websites. I specialize in ReactJS, JavaScript, TypeScript, jQuery, NextJS, 
                    HTML5/CSS3, SASS, Tailwind, PHP, MySQL, WordPress, Gutenberg, etc.</p>
                <p className="mt-6 text-dark-grey text-ox">Posses strong problem-solving, creative/technical thinking, time management, communication, and organizational skills.</p>
                <p className="mt-6 text-dark-grey text-ox">I strive to make a positive impact in the world through cutting edge digital products and keep on top of emerging web
                    technology by learning new languages and frameworks.</p>
              </article>
              <aside className="md-min:basis-2/4 md2-min:basis-2/5 md-min:grow-0 md-min:shrink-0">
                <figure className="about-img-wrap mx-10 md-max:max-w-40 xs-max:!max-w-50 md-max:mt-12 md-max:mx-auto md-min:ml-24 xsl:ml-28 md-xl2:max-w-60 xl2-min:max-w-50 xl2-min:ml-44 xxl:max-w-40">
                    <Image className="sk-portrait" src={portrait} alt="An image of Sergey Karavaev, developer and designer"/>
                </figure>
              </aside>
            </section>
          </div>
        </section>
    );
}

export default AboutSection;