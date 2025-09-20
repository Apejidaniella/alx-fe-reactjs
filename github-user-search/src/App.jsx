import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
     <BrowserRouter> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>  
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;