import ProjectImage from "./ProjectImage";

function SingleProject(props) {
    const imageBlockClasses = `${props.imageOrder} max-w-50`;
    const contentBlockClasses = `${props.contentOrder} flex-auto sm-max:max-w-90 sm:max-w-50`;
    return(
      <div className="flex sm-max:flex-col sm-max:items-center">
        <div className={imageBlockClasses}>{/* img-left */}
            <ProjectImage src={props.imgSrc} />
        </div>
        <div className={contentBlockClasses}>{/* content-right */}
            <a href="#">
              <h2 className="md-max:text-h2sectionmd text-h2sectionlg leading-tight text-center">{props.heading}</h2>
            </a>
            <ul className="mt-6 mb-6 flex justify-center flex-wrap">
              {props.projectTags.map((tag, index) => (
                  <li key={`${props.projectID}-tag-${index}`} className="project-tag relative inline-block text-sm leading-[2] tracking-wider text-gray-500">{tag}</li>
              ))}
            </ul>
            <p className="text-dark-grey md-max:text-base text-lg text-center">{props.paragraph}</p>
            <ul className="flex justify-center my-8">
              {props.buttonLabels.map((label, index) => (
                <li key={`${props.projectID}-btn-${index}`} className="first:mr-7">
                  <a href="#" className="inline-block p-4 bg-gradient-to-r from-primary to-teal-400 text-white uppercase tracking-tightest cursor-pointer
                                                            md-max:my-1 md-min:mx-0 mt-1 mb-0 md-max:text-xs text-sm rounded">{label}</a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    );
}

export default SingleProject;