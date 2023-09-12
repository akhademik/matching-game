export const hp_randomize = (_items: string[], _half_items_length: number) => {
  const _randomized_items: string[] = [];

  for (let i = 0; i < _half_items_length; i++) {
    const _random_index = Math.floor(Math.random() * _items.length);
    const _random_item = _items[_random_index];
    //remove the selected item from the array to prevent duplicates
    _items.splice(_random_index, 1);
    _randomized_items.push(_random_item);
  }

  return _randomized_items;
};

export const hp_shuffle_items = (_items: string[]) => {
  for (let _last_item_index = _items.length - 1; _last_item_index > 0; _last_item_index--) {
    const _random_index = Math.floor(Math.random() * (_last_item_index + 1));
    [_items[_last_item_index], _items[_random_index]] = [
      _items[_random_index],
      _items[_last_item_index]
    ];
  }
  return _items;
};
