const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export const getPoke = () => {
  return fetch(baseURL).then((res) => res.json());
};
