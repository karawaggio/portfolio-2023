import Image from "next/image"
import favicon from "public/favicon.svg"
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Header() {
    return(    
        <header className="xs-min:min-h-header">
          <div className="xs-max:hidden flex justify-between p-3 fixed top-0 right-0 left-0 bg-white z-10">
            <nav role="navigation">
              <ul className="flex justify-start items-center pl-10">
                <li>
                    <a href="#top">
                    <figure className="my-0 ml-2 mr-8">
                        <Image src={favicon} alt="Sergey Karavaev logo SVG"/>
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
    );
}

export default Header;
