import DirectoryItem from "../directoyItem/DirectoryItem";
import { DirectoryContainer } from "./Directory.styles";
const categories = [
  {
    id: 1,
    title: "Soaps",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/soaps",
  },
  {
    id: 2,
    title: "Candles",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/candles",
  },
  {
    id: 3,
    title: "Pomades",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/pomade",
  },
];
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
