import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="topnav" aria-label="Main Navigation" role="navigation">
            <ul>
                <Link to="#" className="topnav" >Women's</Link>
                <Link to="#" className="topnav" >Men's</Link>
                <Link to="#" className="topnav" >On the Street</Link>
                <Link to="#" className="topnav" >The Catwalk</Link>
                <Link to="#" className="topnav" >Ad Watch</Link>
                <Link to="#" className="topnav" >About</Link>
            </ul>
        </nav>

    );
}
