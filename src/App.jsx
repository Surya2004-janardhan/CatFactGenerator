import { useEffect, useState } from "react";
import Axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
function App() {
  const [fact, setfact] = useState("");
  const fetchdata = () => {
    Axios.get("https://catfact.ninja/fact").then((response) =>
      setfact(response.data.fact)
    );
  };

  useEffect(() => {
    fetchdata(); // Calls API on component mount
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-3 mb-4" >
        <button className ="btn btn-primary" onClick={fetchdata}>Generate a cat fact</button>
      </div>
      <h2 className="m-4 bg-warning  p-3">{fact}</h2>
    </>
  );
}

export default App;
