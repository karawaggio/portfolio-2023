import MobileNav from "./MobileNav"

function Footer() {
    return(
        <footer className="xs-max:mt-20">
            <section className="xs-max:hidden xs-min:h-24 bg-accent text-dark flex justify-center items-center xs-min:px-8">
              <div id="copyright"></div>
            </section>

            <section className="fixed bottom-0 right-0 left-0 z-10 pt-2 bg-accent xs-min:hidden xs-max:h-16"> {/* class="mob-foot-nav-wrap fixed-bottom" */}
              <MobileNav/>
            </section>
        </footer>
    );
}

export default Footer;