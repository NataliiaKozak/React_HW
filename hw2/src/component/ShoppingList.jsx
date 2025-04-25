import React from 'react';

function ShoppingList({ items = [] }) {
	if (items.length === 0) {
		return <h3>Список покупок пуст</h3>
	}

	return (
		<div>
			<h2>Список товаров:</h2>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
