import Greeting from './Greeting';
import ShoppingList from './ShoppingList';

function App() {
	const products = ['Ноутбуки', 'Телевизоры', 'Мобильные телефоны'];

	return (
		<div className='App'>
			<Greeting name='Николай' />
			<ShoppingList items={products} />
		</div>
	);
}

export default App;
