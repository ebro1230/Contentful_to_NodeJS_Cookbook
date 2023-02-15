const receips = [
  {
    id: 1,
    name: "Pancakes",
    description: "Delicious pancakes",
    ingredients: [
      { id: 1, name: "Flour", amount: "2 cups" },
      { id: 2, name: "Milk", amount: "1 cup" },
      { id: 3, name: "Eggs", amount: "2" },
    ],
    directions: [
      { id: 1, name: "Mix flour, milk and eggs" },
      { id: 2, name: "Cook on a pan" },
    ],
    author: [
      { id: 1, name: "John Doe", age: "30" },
    ],
    image: "https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_1.jpg",
    prepTime: "10 min",
    cookTime: "20 min",
  },
  {
    id: 2,
    name: "Pasta",
    description: "Delicious pasta",
    ingredients: [
      { id: 1, name: "Pasta", amount: "2 cups" },
      { id: 2, name: "Tomato sauce", amount: "1 cup" },
      { id: 3, name: "Cheese", amount: "2" },
    ],
    directions: [
      { id: 1, name: "Mix pasta, tomato sauce and cheese" },
      { id: 2, name: "Cook on a pan" },
    ],
    image: "https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_1.jpg",
    prepTime: "10 min",
    cookTime: "20 min",
];

export default receips;