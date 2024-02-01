import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "../src/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
			children: [
				{
					path: "/",
					element: <MainContainer />,
				},
				{
					path: "/watch",
					element: <WatchPage />,
				},
			],
		},
	]);
	return (
		<Provider store={store}>
			<div className="bg-stone-800 text-white min-h-screen">
				<Navbar />
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
