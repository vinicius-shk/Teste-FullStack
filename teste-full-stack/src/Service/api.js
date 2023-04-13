export async function getProductsByName(query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`).then((res) => res.json()).then((data) => data);
}
