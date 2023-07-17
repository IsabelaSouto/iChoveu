const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
    const data = await response.json();
    console.log(data);
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    return error;
  }
};
// console.log(searchCities('Rio'));

export const getWeatherByCity = async (cityURL) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
    const data = await response.json();
    return {
      name: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      url: cityURL,
    };
  } catch (error) {
    return error;
  }
};

// console.log(getWeatherByCity('sao-paulo-sao-paulo-brazil'));
