import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import News from './Components/News/News';
import Responsibilities from './Components/Responsibilities/Responsibilities';
import Country from './Components/Country/Country';
import Footer from './Components/Footer/Footer';

// JSX  - JS with HTML
// class -> className
// for -> htmlFor
// aria-label -> ariaLabel

function App() {
	return (
		<>
			<Header />
			<Main />
			<Services />
			<News />
			<Responsibilities />
			<Country />
			<Footer />
		</>
	);
}

export default App;
