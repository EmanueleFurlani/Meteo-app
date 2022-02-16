import React from "react"

const api = {
  key:"9425ce7102250db8673987a76f13b7f1",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
        <div className="location-box"></div>
      </main>
    </div>
  );
}

export default App;
