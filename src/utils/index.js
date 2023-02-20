export const getCoverSrcFromBook = (book) => {
  return (
    process.env.VUE_APP_API_BASE_URL +
    book.attributes.cover.data.attributes.formats.thumbnail.url
  );
};

export const getAuthorsFromBook = (book) => {
  return book.attributes.authors.data;
};

export const getImageSrcFromEntity = (entity) => {
  console.log("in func", entity);
  return (
    process.env.VUE_APP_API_BASE_URL +
    entity.attributes.image.data.attributes.formats.thumbnail.url
  );
};

export const formatFullName = (entity) => {
  return `${entity.attributes.name} ${entity.attributes.last_name}`;
};

export const getSubNavbarItems = () => {
  return [
    {
      label: "Mais vendidos",
      url: "/top-selled",
    },
  ];
};

export const getQuantityPossibilities = () => {
  return [
    {
      name: "1",
      value: 1,
    },
    {
      name: "2",
      value: 2,
    },
    {
      name: "3",
      value: 3,
    },
    {
      name: "4",
      value: 4,
    },
    {
      name: "5",
      value: 5,
    },
  ];
};
