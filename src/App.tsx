import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CartItemsList from "./components/CartItemsList";
import LikeProductsList from "./components/LikeProductsList";

function App() {
	return (
		<>
			<Header />
			<Tabs />
			<CartItemsList />
			<LikeProductsList />
		</>
	);
}

export default App;
