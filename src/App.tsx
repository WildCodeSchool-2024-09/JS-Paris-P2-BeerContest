import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navigation from "./component/Nav";

function App() {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
}
export default App;
