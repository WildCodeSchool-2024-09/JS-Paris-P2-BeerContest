import { Link } from "react-router-dom";
import logo from "../assets/Beer Contest.png";
import "../component/Nav.css";


function Navigation() {
	return (
		<nav id="navigation-bar">
			<img src={logo} alt="Logo" />
			<Link to="/">Accueil</Link>
			<Link to="/game">Jeu</Link>
			<Link to="/test">Test</Link>
			<Link to="/memory">Memory</Link>
			<Link to="/about">A propos</Link>
		</nav>
	);
}

export default Navigation;