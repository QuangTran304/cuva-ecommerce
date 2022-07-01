import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation bar</h1>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h2>I am the SHOP page</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
