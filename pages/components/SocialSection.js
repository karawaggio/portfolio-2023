import {FaRegEnvelope} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa6"
import {FaRegFileLines} from "react-icons/fa6"

function SocialSection() {
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
          <div className="py-4 px-8 my-12 mx-auto">
            <h2 className="md-max:text-center md-max:text-h2sectionmd md-min:text-h2sectionlg leading-normal text-dark">Let's connect</h2>

            <div className="md-max:text-center md2-xl:mt-8 md2-xl:ml-4 xl:mt-16 xl:ml-0">
            <ul className="md-xl:py-4 md2-xl:grid md2-xl:grid-cols-2 md2-xl:gap-x-8 md2-xl:gap-y-4 xl:flex xl:justify-between xl:text-center">
                <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                <a href="mailto:sergeykaravaev44@gmail.com">
                  <div className="md-xl:grid md-xl:grid-cols-social-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                    <span className="md-xl:flex md-xl:items-center">
                      <FaRegEnvelope className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                    </span>
                    <div className="md-min:py-3">
                      <h3 className="md-max:text-h3socialsm md-min:text-h3socialmd leading-normal pt-1.5 pb-1">Email</h3>
                      <p className="text-dark-grey md-max:mt-1 md-min:text-psocialmd"><span id="email">sergeykaravaev44&nbsp;[at]&nbsp;gmail.com</span></p>        
                    </div>
                  </div>
                </a>
                </li>
                <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                <a href="https://www.linkedin.com/in/skaravaev/" target="_blank">
                  <div className="md-xl:grid md-xl:grid-cols-social-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                    <span className="md-xl:flex md-xl:items-center">
                      <FaLinkedin className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                    </span>
                    <div className="md-min:py-3">
                      <h3 className="md-max:text-h3socialsm md-min:text-h3socialmd leading-normal pt-1.5 pb-1">LinkedIn</h3>
                      <p className="text-dark-grey md-max:mt-1 md-min:text-psocialmd">linkedin.com/in/skaravaev</p>
                    </div>
                  </div>
                </a>
                </li>
                <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                <a href="https://github.com/karawaggio" target="_blank">
                  <div className="md-xl:grid md-xl:grid-cols-social-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                    <span className="md-xl:flex md-xl:items-center">
                      <FaGithub className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                    </span>
                    <div className="md-min:py-3">
                      <h3 className="md-max:text-h3socialsm md-min:text-h3socialmd leading-normal pt-1.5 pb-1">Github</h3>
                      <p className="text-dark-grey md-max:mt-1 md-min:text-psocialmd">github.com/karawaggio</p>
                    </div>
                  </div>
                </a>
                </li>
                <li className="md-max:my-10 md2-xl:ml-8 xl:ml-0">
                <a href="#">
                  <div className="md-xl:grid md-xl:grid-cols-social-gridlg md-xl:gap-x-8 md-xl:my-4 md-xl:pt-2 md-xl:pl-4 md-xl:pr-2 md2-xl:m-0 xl:p-2">
                    <span className="md-xl:flex md-xl:items-center">
                      <FaRegFileLines className="inline text-accent-2 md-max:text-iconsm md-min:text-iconmd"/>
                    </span>
                    <div className="md-min:py-3">
                      <h3 className="md-max:text-h3socialsm md-min:text-h3socialmd leading-normal pt-1.5 pb-1">Resume</h3>
                      <p className="text-dark-grey md-max:mt-1 md-min:text-psocialmd">upon request</p>
                      {/* <a class="main-btn resume-btn" href="resume/sergey-karavaev-resume.pdf" target="_blank">Resume</a> */}
                    </div>
                  </div>
                </a>
                </li>
            </ul>
            </div>

          </div>
        </section>
    );
}

export default SocialSection;