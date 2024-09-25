const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const AllProducts = async () => {

    const response = await fetch(BASE_URL);
    const result = response.json();
    return result;
}

export const LimitedProduts = async (number) => {

    const response = await fetch(`${BASE_URL}?offset=0&limit=${number}`);
    const result = response.json();
    return result;
}