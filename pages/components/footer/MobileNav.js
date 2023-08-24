import {FaHouseChimney} from "react-icons/fa6"
import {FaBriefcase} from "react-icons/fa6"
import {FaUserAstronaut} from "react-icons/fa6"
import {FaPaperPlane} from "react-icons/fa6"

function MobileNav() {
    return(
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
    );
}

export default MobileNav;