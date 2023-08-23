import Head from "next/head"
import Image from "next/image"
import {FaHouseChimney} from "react-icons/fa6"
import {FaBriefcase} from "react-icons/fa6"
import {FaUserAstronaut} from "react-icons/fa6"
import {FaPaperPlane} from "react-icons/fa6"
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <section className="font-titilliumweb">
        <Head>
          <title>Sergey Karavaev | Portfolio</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>

        <main>
          <header className="xs-min:min-h-header">
            <div className="xs-max:hidden flex justify-between p-4 fixed top-0 right-0 left-0 bg-white z-11">
              <nav role="navigation">
                <ul className="flex justify-start items-center pl-10">
                  <li>
                    <a href="#top">
                      <figure className="my-0 ml-2 mr-8">
                        <img src="/favicon.svg" alt="Sergey Karavaev Vector Logo SVG"/>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a className="md2-max:hidden text-dark text-lg" href="#top">Sergey Karavaev</a>
                  </li>
                </ul>
              </nav>
              <nav role="navigation">
                <ul className="flex justify-end items-center">
                  <li className="py-2 px-6 md-min:px-8">
                    <a className="text-dark text-lg" href="#projects">Projects</a>
                  </li>
                  <li className="py-2 px-6 md-min:px-8">
                    <a className="text-dark text-lg" href="#about">About</a>
                  </li>
                  <li className="py-2 px-6 md-min:px-8">
                    <a className="text-dark text-lg" href="#connect">Connect</a>
                  </li>
                  {/*<BsFillMoonStarsFill className="text-dark text-lg"/>*/}
                </ul>
              </nav>
            </div>
          </header>

          <section className="xs-max:p-4 xs-min:mx-4 xs-min:mb-4 sm-md:pt-36 sm-md:pb-28 bg-light-grey text-center md-min:p-28">
              <div className="md2-min:p-12 my-12">
                <figure className="mb-4">
                    <img className="xs-max:block xs-min:hidden w-logo-width h-logo-height mt-24 mx-auto mb-12" src="/sk-logo.svg" alt="Sergey Karavaev Vector Logo SVG" />
                </figure>
                <h1 className="md-max:text-h1md md-min:text-h1lg text-dark leading-extra-relaxed mb-2">Developer & Designer</h1>
                <h2 className="md-max:text-h2md md-min:text-h2lg text-dark leading-extra-relaxed mt-3 mb-2">Sergey Karavaev</h2>
                <a className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                              md-max:my-12 md-min:mx-0 mt-10 mb-0 md-max:text-sm text-smbase" 
                   href="#projects">
                  See my work
                </a>
              </div>
              <div id="projects">{/* This div is used to navigate to projects section */}</div>
          </section>
        </main>
        
        <footer className="mt-20 ">
            <section className="xs-max:hidden xs-min:h-24 bg-accent text-dark flex justify-center items-center xs-min:px-8">
              <div id="copyright"></div>
            </section>

            <section className="fixed bottom-0 right-0 left-0 z-10 pt-2 bg-accent xs-min:hidden xs-max:h-16"> {/* class="mob-foot-nav-wrap fixed-bottom" */}

              <nav role="navigation">
                <ul className="flex justify-around p-2">
                  <li>
                    <a className="text-dark" href="#top">
                      <span className="flex justify-center text-smbase">
                        <FaHouseChimney/>
                      </span>
                      <div className="pt-1 pb-2 px-2 text-smbase">
                        <p>Home</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="#projects">
                      <span className="flex justify-center text-smbase">
                        <FaBriefcase/>
                      </span>
                      <div className="pt-1 pb-2 px-2 text-smbase">
                        <p>Projects</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="#about">
                      <span className="flex justify-center text-smbase">
                          <FaUserAstronaut/>
                      </span>
                      <div className="pt-1 pb-2 px-2 text-smbase">
                          <p>About</p>    
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="#connect">
                      <span className="flex justify-center text-smbase">
                        <FaPaperPlane/>
                      </span>
                      <div className="pt-1 pb-2 px-2 text-smbase">
                        <p>Connect</p>    
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>

            </section>
        </footer>
    </section>
  )
}
