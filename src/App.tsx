import Directory from "./components/directory/Directory";

const App = () => {
  const categories = [
    { id: 1, title: "Soaps", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    {
      id: 1,
      title: "Candles",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 1,
      title: "Pomades",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
