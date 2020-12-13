// import './App.css';
import PageContent from './PageContent';
import NavBar from './NavBarHOC';
import LoginForm from './LoginForm';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';


function App () {
	return (
		<div className="App">
			<ThemeProvider>
				<LanguageProvider>

				<PageContent>
					<NavBar />
					<LoginForm />
				</PageContent>
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
