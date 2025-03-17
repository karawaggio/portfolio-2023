import ProjectImage from "./ProjectImage";

function SingleProject(props) {
    const imageBlockClasses = `${props.imageOrder} max-w-50`;
    const contentBlockClasses = `${props.contentOrder} flex-auto max-w-50`;
    return(
      <div className="flex">
        <div className={imageBlockClasses}>{/* img-left */}
            <ProjectImage src={props.imgSrc} />
        </div>
        <div className={contentBlockClasses}>{/* content-right */}
            <a href="#">
              <h2 className="text-h2sectionlg leading-tight text-center">{props.heading}</h2>
            </a>
            <ul className="mt-6 mb-5 flex justify-center flex-wrap">
              {props.projectTags.map((tag, index) => (
                  <li key={`${props.projectID}-tag-${index}`} className="project-tag">{tag}</li>
              ))}
            </ul>
            <p className="text-dark-grey text-lg text-center">{props.paragraph}</p>
            <ul className="flex justify-center my-8">
              {props.buttonLabels.map((label, index) => (
                <li key={`${props.projectID}-btn-${index}`} className="mr-7"><a href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                            md-max:my-11 md-min:mx-0 mt-9 mb-0 md-max:text-sm text-smbase rounded">{label}</a></li>
              ))}
            </ul>
        </div>
      </div>
    );
}

export default SingleProject;