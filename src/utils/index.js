export const getCoverSrcFromBook = (book) => {
  return (
    process.env.VUE_APP_API_BASE_URL +
    book.attributes.cover.data.attributes.formats.thumbnail.url
  );
};

export const getImageSrcFromEntity = (entity) => {
  console.log("in func", entity);
  return (
    process.env.VUE_APP_API_BASE_URL +
    entity.attributes.image.data.attributes.formats.thumbnail.url
  );
};

export const formatFullName = (entity) => {
  return `${entity.attributes.name} ${entity.attributes.name}`;
};

export const getSubNavbarItems = () => {
  return [
    {
      label: "Mais vendidos",
      url: "/top-selled",
    },
  ];
};
