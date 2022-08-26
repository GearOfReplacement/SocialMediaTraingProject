import React, { StrictMode } from "react";

import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/UI/header/Header";
import { Routing } from "./components/Routing";
import { AuthProvider } from "./store/store";

function App() {
	return (
		<StrictMode>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Routing />
				</BrowserRouter>
			</AuthProvider>
		</StrictMode>
	);
}

export default App;
