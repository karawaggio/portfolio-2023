import Image from "next/image"
import mockupSummit from "public/mockup-summit.jpg"

function ProjectsSection() {
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
          <div className="pl-0 pr-4 px-8 my-12 mx-auto">
            <div className="flex flex-wrap flex-col">

              <article className="flex mt-12">{/* project-block */}
                <div className="order-none max-w-50">{/* img-left */}
                  <div>{/* proj-img-wrap */}
                    <figure>
                      <Image src={mockupSummit} alt=""/>
                    </figure>
                  </div>
                </div>
                <div className="order-1 flex-auto max-w-50">{/* content-right */}
                  <a href="#">
                    <h2 className="text-h2sectionlg leading-tight text-center">WordPress site for a business center</h2>
                  </a>
                  <ul className="mt-6 mb-5 flex justify-center flex-wrap">
                    <li className="project-tag">WordPress</li>
                    <li className="project-tag">Child Theme</li>
                    <li className="project-tag">UX Design</li>
                    <li className="project-tag">JavaScript</li>
                    <li className="project-tag">jQuery</li>
                    <li className="project-tag">PHP</li>
                    <li className="project-tag">SASS</li>
                  </ul>
                  <p className="text-dark-grey text-lg text-center">Transformed the way Summit Executive Center site looks like</p>
                  <ul className="flex justify-center my-8">
                    <li className="mr-7"><a href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                                 md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded">Case study</a></li>
                    <li><a target="_blank" href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                                md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded">View live</a></li>
                  </ul>
                </div>
              </article>

              <article className="flex mt-28">{/* project-block */}
                <div className="order-1 max-w-50">{/* img-right */}
                  <div>{/* proj-img-wrap */}
                    <figure>
                      <Image src={mockupSummit} alt=""/>
                    </figure>
                  </div>
                </div>
                <div className="order-none flex-auto max-w-50">{/* content-left */}
                  <a href="#">
                    <h2 className="text-h2sectionlg leading-tight text-center">WordPress site for a business center</h2>
                  </a>
                  <ul className="mt-6 mb-5 flex justify-center flex-wrap">
                    <li className="project-tag">WordPress</li>
                    <li className="project-tag">Child Theme</li>
                    <li className="project-tag">UX Design</li>
                    <li className="project-tag">JavaScript</li>
                    <li className="project-tag">jQuery</li>
                    <li className="project-tag">PHP</li>
                    <li className="project-tag">SASS</li>
                  </ul>
                  <p className="text-dark-grey text-lg text-center">Transformed the way Summit Executive Center site looks like</p>
                  <ul className="flex justify-center my-8">
                    <li className="mr-7"><a href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                                 md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded">Case study</a></li>
                    <li><a target="_blank" href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                                md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded">View live</a></li>
                  </ul>
                </div>
              </article>

            </div>
          </div>
        </section>
    );
}

export default ProjectsSection;