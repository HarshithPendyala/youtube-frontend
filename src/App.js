import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "../src/utils/store";

function App() {
	return (
		<Provider store={store}>
			<div className="bg-stone-800 text-white min-h-screen">
				<Navbar />
				<Body />
			</div>
		</Provider>
	);
}

export default App;
