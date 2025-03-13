import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL) 
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return <div>{data ? data : "Loading..."}</div>;
}

export default App;
