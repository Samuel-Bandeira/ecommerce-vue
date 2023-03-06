const categories = [
  {
    id: 1,
    name: "Horror"
  }
];

export const getCategories = () => {
  return categories;
};

export const getCategory = ({ id }) => {
  const category = categories.filter((category) => category.id === id);
  return category[0];
};
