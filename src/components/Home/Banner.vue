<template>
  <Carousel :value="images" :numVisible="1" :numScroll="1">
    <template #item>
      <img src="../../assets/banner.png" alt="banner-image" />
    </template>
  </Carousel>
</template>
<script>
import Carousel from "primevue/carousel";
export default {
  name: "banner-component",
  components: {
    Carousel
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: "../../assets/banner.png"
        },
        {
          id: 1,
          url: "../../assets/banner.png"
        },
        {
          id: 1,
          url: "../../assets/banner.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss" src="../../scss/home/banner.scss" scoped></style>
