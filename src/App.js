import React, { useState, useEffect } from "react";
import "./App.css";
//import FetchRandomUser from "./components/FetchRandomUser";

function useFetch(url, defaultResponse){
  const [data, setData] = useState(defaultResponse);

  async function getDataFromAPI(url){
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      setData({
        isLoading: false,
        data
      })
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDataFromAPI(url);
  }, [url]);

  return data;
}


export default function App() {

    //const apiEndPoint = 'http://api.icndb.com/jokes/random';
    const apiEndPoint = 'http://api.icndb.com/jokes/random';
    const userFetchResponse = useFetch(apiEndPoint, {isLoading: true, data: null});

if (!userFetchResponse.data || userFetchResponse.isLoading) {
  return 'Loading...';


}
// {resp.data.value.map((item, index) => (
//  <div>
//   <h4>{item.subitem}</h4>
//  </div>
// ))}

console.log(userFetchResponse.data);

const joke = userFetchResponse.data.value;
  return (
    <div className="App">

      <header className="App-header">

       <div>
        <h4>{joke.joke}</h4>

       </div>

      </header>
    </div>
  )
