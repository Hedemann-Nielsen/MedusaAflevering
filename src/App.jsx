import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes";
import "./App.scss";
import "./index.css";

function App() {
	// const title = product?.title || "Loading...";
	// const description = product?.description || "Loading...";
	// const thumbnail = product?.thumbnail || "Loading...";

	return <RouterProvider router={routes} />;
}

export default App;
