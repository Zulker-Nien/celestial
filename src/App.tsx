import Home from "./routes/home/Home";
import { Routes, Route } from "react-router";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/signIn/SignIn";

const Shop = () => {
  return <h1>Shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
