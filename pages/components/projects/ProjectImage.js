import Image from "next/image"

function ProjectImage({src}) {
    return(            
        <div>{/* proj-img-wrap */}
          <figure>
            <Image src={src} alt=""/>
          </figure>
        </div>
    );
}

export default ProjectImage;