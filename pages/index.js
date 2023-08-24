import Head from "next/head"
import Image from "next/image"
import {FaHouseChimney} from "react-icons/fa6"
import {FaBriefcase} from "react-icons/fa6"
import {FaUserAstronaut} from "react-icons/fa6"
import {FaPaperPlane} from "react-icons/fa6"
import {FaRegEnvelope} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa6"
import {FaCodepen} from "react-icons/fa6"
import {FaRegFileLines} from "react-icons/fa6"
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

          <section className="xs-max:p-4 xs-min:mx-4 xs-min:mb-4 sm-md:pt-36 sm-md:pb-28 bg-light-grey text-center md-min:p-28 rounded">
              <div className="md2-min:p-12 my-12">
                <figure className="mb-4">
                    <img className="xs-max:block xs-min:hidden w-logo-width h-logo-height mt-24 mx-auto mb-12" src="/sk-logo.svg" alt="Sergey Karavaev Vector Logo SVG" />
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

          <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
            <div className="py-4 px-8 my-12 mx-auto">
              <h2 className="md-max:text-center md-max:text-h2sectionmd md-min:text-h2sectionlg leading-normal text-dark">Let's connect</h2>

              <div className="md-max:text-center md2-xl:mt-8 md2-xl:ml-4 xl:mt-16 xl:ml-0">
                <ul className="md-xl:py-4 md2-xl:grid md2-xl:grid-cols-2 md2-xl:gap-x-8 md2-xl:gap-y-4 xl:flex xl:justify-between xl:text-center">
                  <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                    <a href="mailto:sergeykaravaev44@gmail.com">
                      <div className="md-xl:grid md-xl:grid-cols-connect-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                        <span className="md-xl:flex md-xl:items-center">
                          <FaRegEnvelope className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                        </span>
                        <div className="md-min:py-3">
                          <h3 className="md-max:text-h3connectsm md-min:text-h3connectmd leading-normal pt-1.5 pb-1">Email</h3>
                          <p className="text-dark-grey md-max:mt-1 md-min:text-pconnectmd"><span id="email">sergeykaravaev44&nbsp;[at]&nbsp;gmail.com</span></p>        
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                    <a href="https://www.linkedin.com/in/skaravaev/" target="_blank">
                      <div className="md-xl:grid md-xl:grid-cols-connect-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                        <span className="md-xl:flex md-xl:items-center">
                          <FaLinkedin className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                        </span>
                        <div className="md-min:py-3">
                          <h3 className="md-max:text-h3connectsm md-min:text-h3connectmd leading-normal pt-1.5 pb-1">LinkedIn</h3>
                          <p className="text-dark-grey md-max:mt-1 md-min:text-pconnectmd">linkedin.com/in/skaravaev</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                    <a href="https://github.com/karawaggio" target="_blank">
                      <div className="md-xl:grid md-xl:grid-cols-connect-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                        <span className="md-xl:flex md-xl:items-center">
                          <FaGithub className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                        </span>
                        <div className="md-min:py-3">
                          <h3 className="md-max:text-h3connectsm md-min:text-h3connectmd leading-normal pt-1.5 pb-1">Github</h3>
                          <p className="text-dark-grey md-max:mt-1 md-min:text-pconnectmd">github.com/karawaggio</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                    <a href="https://codepen.io/karawaggio/" target="_blank">
                      <div className="md-xl:grid md-xl:grid-cols-connect-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                        <span className="md-xl:flex md-xl:items-center">
                          <FaCodepen className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                        </span>
                        <div className="md-min:py-3">
                          <h3 className="md-max:text-h3connectsm md-min:text-h3connectmd leading-normal pt-1.5 pb-1">Codepen</h3>
                          <p className="text-dark-grey md-max:mt-1 md-min:text-pconnectmd">codepen.io/karawaggio</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                    <a href="#">
                      <div className="md-xl:grid md-xl:grid-cols-connect-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                        <span className="md-xl:flex md-xl:items-center">
                          <FaRegFileLines className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                        </span>
                        <div className="md-min:py-3">
                          <h3 className="md-max:text-h3connectsm md-min:text-h3connectmd leading-normal pt-1.5 pb-1">Resume</h3>
                          <p className="text-dark-grey md-max:mt-1 md-min:text-pconnectmd">under review</p>
                          {/* <a class="main-btn resume-btn" href="resume/sergey-karavaev-resume.pdf" target="_blank">Resume</a> */}
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </section>
        </main>
        
        <footer className="xs-max:mt-20">
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
