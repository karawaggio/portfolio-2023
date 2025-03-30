import SingleProject from "./SingleProject";
import mockupSummit from "public/mockup-summit.jpg"

function ProjectsSection() {
    const projectOneTags = ['WordPress', 'Child Theme', 'UX Design', 'JavaScript', 'jQuery', 'PHP', 'SASS'];
    const projectOneBtns = ['Case study', 'View live'];
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-white rounded">
          <div className="pl-0 pr-4 px-8 my-12 mx-auto">
            <div className="flex flex-wrap flex-col">
              <article className="mt-12">
                <SingleProject
                  projectID="project1"
                  imageOrder="order-0" 
                  contentOrder="order-1" 
                  imgSrc={mockupSummit} 
                  heading="WordPress site for a business center" 
                  projectTags={projectOneTags}
                  paragraph="Transformed Summit Executive Center website"
                  buttonLabels={projectOneBtns}
                />
              </article>
              <article className="mt-28">
                <SingleProject
                  projectID="project2"
                  imageOrder="order-1" 
                  contentOrder="order-0" 
                  imgSrc={mockupSummit} 
                  heading="WordPress site for a business center" 
                  projectTags={projectOneTags}
                  paragraph="Transformed Summit Executive Center website"
                  buttonLabels={projectOneBtns}
                />
              </article>
            </div>
          </div>
        </section>
    );
}

export default ProjectsSection;