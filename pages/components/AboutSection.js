import Image from "next/image"

function AboutSection() {
    return(
        <section className="xs-max:mt-0.8rem xs-min:m-4 md-min:p-12 p-4 bg-light-grey rounded">
          <div className="py-4 px-8 my-12 mx-auto">
            <h2 className="md-max:text-center md-max:text-h2sectionmd md-min:text-h2sectionlg leading-normal text-dark">About me</h2>
          </div>
        </section>
    );
}

export default AboutSection;