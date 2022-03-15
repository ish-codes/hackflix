import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">
				<h1>Hackflix</h1>
			</Link>
		</header>
	);
}
// this is a stateless component
export default Header;
