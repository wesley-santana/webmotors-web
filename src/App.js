import Header from './components/Header';
import Tab from './components/Tab';
import GlobalStyle from './styles/globalStyles';

function App() {
	return (
		<div>
			<GlobalStyle />
			<div className="container">
				<Header />
				<Tab />
			</div>
		</div>
	);
}

export default App;
