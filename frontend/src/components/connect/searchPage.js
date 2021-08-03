import React, { Component, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Categories from "../categories/categories";

const categories = [
  {
    id: 1,
    name: "Large Metal Sculpture",
    description:
      "Whether you display this abstract metal sculpture in your living room, office, or outdoors, it makes a stunning statement piece. Crafted from post-consumer recycled aluminum that will not rust or corrode, this modern metal sculpture will last for years to come and is suitable for indoor or outdoor display.",
    price: 295,
    countInStock: 2,
    category: "Sculpture",
    imageURL:
      "https://i.etsystatic.com/5133928/r/il/28d64b/2165095231/il_794xN.2165095231_5wuv.jpg",
  },
  {
    id: 2,
    name: "Tap Vinyl Sticker",
    description:
      "⭐️⭐️ATTENTION- We are taking a short break! All orders placed Friday, May 14th to Sunday, May 16th will be shipped on Monday the 17th. Thank you for your patience! ⭐️",
    price: 3,
    countInStock: 10,
    category: "Performing",
    imageURL:
      "https://i.etsystatic.com/17436017/r/il/854015/2102723173/il_794xN.2102723173_i6p8.jpg",
  },
  {
    id: 3,
    name: "NYC Spring Cherry Blossom Flowers New York City by Joy Laforme Paint Anywhere Collective Kit Adult Paint by Number",
    description:
      "This original image is turned into a paint by numbers kit. Each kit includes a great quality template printed canvas, a 4 brush set, and 30 handy little pots of acrylic paint. Each of our projects is about 12 hours. Paint however you would like. Enjoy!",
    price: 36,
    countInStock: 2,
    category: "Painting",
    imageURL:
      "https://i.etsystatic.com/25572722/r/il/c3bf5b/3049388755/il_794xN.3049388755_hiax.jpg",
  },
  {
    id: 4,
    name: "The Conan Chronicles by Robert Jordan",
    description: "Hardcover 1st Edition, 1st Printing (1995)",
    price: 40.5,
    countInStock: 1,
    category: "Literature",
    imageURL:
      "https://i.etsystatic.com/29469133/r/il/260682/3079948896/il_794xN.3079948896_6v3a.jpg",
  },
  {
    id: 5,
    name: "Music Note Ring-Sterling Silver-Hammered Texture-Symbol Ring-Symbolic Jewelry-Musician Music Gift-Christmas Gift-Graduation Gift-Handmade",
    description:
      "This solid sterling silver music note ring is part of my Musical Motifs Collection!",
    price: 39.25,
    countInStock: 4,
    category: "Music",
    imageURL:
      "https://i.etsystatic.com/13736855/r/il/df385f/1856946869/il_794xN.1856946869_1vde.jpg",
  },
  {
    id: 6,
    name: "18th c. Architectural Prints | Buy 2 Get 1 Free | Six Neoclassical Italian Architectural Etchings",
    description:
      "Restoration Style Architecture Artwork. 18th Century Neoclassical Italian Architectural Etchings. An examination of the Five Orders of Architecture: Doric, Ionic, Roman, Tuscan, and Corinthian. Five prints represent the ornaments of each order, and a sixth print compares them.",
    price: 15,
    countInStock: 10,
    category: "Architecture",
    imageURL:
      "https://i.etsystatic.com/7608365/r/il/c4ff30/2488325416/il_794xN.2488325416_q4eu.jpg",
  },
];

const filterCategories = (categories, query) => {
  if (!query) {
    return categories;
  }

  return categories.filter((category) => {
    const categoryName = category.name.toLowerCase();
    return categoryName.includes(query);
  });
};

const SearchPage = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredCategories = filterCategories(categories, searchQuery);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories onDataFetched={searchQuery} />
      <ul>
        {filteredCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
