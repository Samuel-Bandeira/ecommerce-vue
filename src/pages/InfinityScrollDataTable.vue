<template>
  <DataTable :value="dataTableData">
    <Column header="Id" field="id"></Column>
    <Column header="Title" field="title"></Column>
    <Column header="Image">
      <template #body="{ data }">
        <img :src="data.thumbnailUrl" alt="image-thumbnail" />
      </template>
    </Column>
    <template #empty>
      <p>There's no data.</p>
    </template>
  </DataTable>
  <div
    style="border: 1px solid black; height: 100px; width: 100px"
    v-if="dataTableData"
    v-observe-visibility="handleScrolledDown()"
  ></div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { getPhotos } from "../api/photos";

export default {
  components: {
    DataTable,
    Column,
  },
  async created() {
    const { data } = await getPhotos();
    this.dataTableData = data;
  },
  data() {
    return {
      dataTableData: null,
    };
  },
  methods: {
    getPhotos,
    handleScrolledDown() {
      console.log("scrolling");
    },
  },
};
</script>
