import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
