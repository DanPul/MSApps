import "./Copyrights.css";

function Copyrights(): JSX.Element {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <div className="Copyrights">
			<p>All Rights Reserved © {year}</p>
        </div>
    );
}

export default Copyrights;
