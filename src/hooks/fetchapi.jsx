const BASE_URL = 'https://fakestoreapi.com/products';

export const AllProducts = async () => {

    const response = await fetch(BASE_URL);
    const result = response.json();
    return result;
}

export const LimitedProduts = async (number) => {

    const response = await fetch(`${BASE_URL}?limit=${number}`);
    const result = response.json();
    return result;
}