import Directory from "../../components/directory/Directory";

import { Outlet } from "react-router";
const Home = () => {
  const categories = [
    { id: 1, title: "Soaps", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    {
      id: 2,
      title: "Candles",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Pomades",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};
export default Home;
