import "./styles/main.css"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home"

function App() {
	return (
		<div className="App">
			<Navbar />

			<Home />
			{/* <Projects /> */}
			{/* <Contacts /> */}

			<Footer />
		</div>
	)
}

export default App
