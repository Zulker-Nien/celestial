import DirectoryItem from "../directoyItem/DirectoryItem";
import { DirectoryContainer } from "./Directory.styles";
const categories = [
  {
    id: 1,
    title: "Soaps",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1BlBnSx98npo1aGCKe9PSaxyIYTHg1loC",
    route: "shop/soaps",
  },

  {
    id: 2,
    title: "Candles",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1i1cvNTgKjyJMhHxIyyo2s52dGVyMq3BO",
    route: "shop/candles",
  },
  {
    id: 3,
    title: "Pomades",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1zFvaF1yyyNg2WWJQk0wHrWWjd3q-Wado",
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
