import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <nav id="main-navigation" aria-label="Main navigation">
            <ul className="menu">
                <li>
                    <a id="navhom" href="/">Home</a>
                </li>
                <li>
                    <a id="navabo" href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
}