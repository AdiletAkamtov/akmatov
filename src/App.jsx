import "./styles/main.css"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Projects from "./pages/Home/Projects"

function App() {
	return (
		<div className="App">
			<Navbar />

			{/* <Home /> */}
			<Projects />
			{/* <Contacts /> */}

			<Footer />
		</div>
	)
}

export default App
