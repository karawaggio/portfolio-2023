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
          <section className="xs-max:hidden fixed top-0 right-0 left-0 z-11 flex justify-between p-4 bg-white">
            <nav role="navigation">
              <ul className="flex justify-start items-center">
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
                <li className="py-2 px-6">
                  <a className="text-dark text-lg" href="#projects">Projects</a>
                </li>
                <li className="py-2 px-6">
                  <a className="text-dark text-lg" href="#about">About</a>
                </li>
                <li className="py-2 px-6">
                  <a className="text-dark text-lg" href="#connect">Connect</a>
                </li>
                {/*<li className="py-2 px-6">
                  <BsFillMoonStarsFill className="text-dark text-lg"/>
                 </li>*/}
              </ul>
            </nav>
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
