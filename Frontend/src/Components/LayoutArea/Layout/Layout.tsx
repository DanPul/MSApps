import Buttons from "../Buttons/Buttons";
import Collage from "../Collage/Collage";
import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <nav>
                <Buttons />
            </nav>

            <main>
                <Collage />
            </main>

            <footer>
                <Copyrights />
            </footer>

        </div>
    );
}

export default Layout;
