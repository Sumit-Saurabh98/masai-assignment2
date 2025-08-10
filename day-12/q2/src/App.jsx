import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCity from "./components/SearchCity";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchCity />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
