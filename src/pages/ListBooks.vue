<template>
  <DataTable :value="books" :paginator="true" :rows="3">
    <Column field="id" header="Id" :sortable="true" />
    <Column field="attributes.title" header="Title" :sortable="true" />
    <Column field="attributes.price" header="Price" :sortable="true">
      <template #body="slotProps">
        <p>{{ "R$ " + slotProps.data.attributes.price }}</p>
      </template>
    </Column>
    <Column header="Cover">
      <template #body="slotProps">
        <div
          style="
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 100%;
          "
        >
          <img :src="getCoverSrcFromBook(slotProps.data)" style="width: 100%" />
        </div>
      </template>
    </Column>
    <Column header="Authors">
      <template #body="slotProps">
        <div
          v-for="author in getAuthorsFromBook(slotProps.data)"
          :key="author.id"
          style="display: flex; align-items: center"
        >
          <div
            style="
              width: 50px;
              height: 50px;
              border-radius: 100%;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0.5em;
            "
          >
            <img
              :src="getImageSrcFromEntity(author)"
              alt="author-image"
              style="width: 130%"
            />
          </div>

          <p>{{ formatFullName(author) }}</p>
        </div>
      </template></Column
    >
    <Column header="options">
      <template #body>
        <div>
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-text p-button-secondary"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-text p-button-secondary"
          />
        </div> </template
    ></Column>
  </DataTable>
</template>
<script>
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import { getBooks } from "@/api/bookApi";
import {
  formatFullName,
  getAuthorsFromBook,
  getImageSrcFromEntity,
  getCoverSrcFromBook,
} from "@/utils";

export default {
  components: {
    DataTable,
    Column,
    Button,
  },
  async created() {
    this.books = await getBooks();
  },
  data() {
    return {
      books: null,
    };
  },
  methods: {
    formatFullName,
    getAuthorsFromBook,
    getImageSrcFromEntity,
    getCoverSrcFromBook,
  },
};
</script>
<style></style>
