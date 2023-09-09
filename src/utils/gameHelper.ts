export const get_random_items = (items: string[], _half_items_length: number) => {
	const _randomized_items: string[] = [];

	for (let i = 0; i < _half_items_length; i++) {
		const _random_index = Math.floor(Math.random() * items.length);
		const _random_item = items[_random_index];
		//remove the selected item from the array to prevent duplicates
		items.splice(_random_index, 1);
		_randomized_items.push(_random_item);
	}

	return _randomized_items;
};

export const shuffle_items = (items: string[]) => {
	for (let last_item_index = items.length - 1; last_item_index > 0; last_item_index--) {
		const random_index = Math.floor(Math.random() * (last_item_index + 1));
		[items[last_item_index], items[random_index]] = [items[random_index], items[last_item_index]];
	}
	return items;
};
