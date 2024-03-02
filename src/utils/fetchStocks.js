const fetchStocks = async() =>{
    const url =
    "https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a518a4799amshfb9da0bd07c8d29p18e681jsn7a562157776b",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.stock[0].name);
    // setStockData(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default fetchStocks;