export function search(searchText, restaurant) {
  return restaurant.filter((resto) => {
    return resto.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
}
