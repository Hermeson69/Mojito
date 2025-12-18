import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktals from './components/Cocktals.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	 <Navbar />
	 <Hero />
	 <Cocktals />
	 <About/>
	 <Art/>
	</main>
 )
}

export default App
