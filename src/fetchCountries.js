const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = async (name) => {
  const resp = await fetch(
        `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
    );
    if (resp.status === 404) {
        return Promise.reject(new Error());
    }
    return await resp.json();
};

export { fetchCountries };

