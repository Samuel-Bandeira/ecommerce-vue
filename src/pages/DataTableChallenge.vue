<template>
  <Dialog
    header="Create Book"
    v-model:visible="displayCreateBookModal"
    :modal="true"
    @after-hide="onCreateBookModalClose()"
  >
    <div class="input-container">
      <p>Title:</p>
      <InputText placeholder="Title" v-model="createBookData.title" />
    </div>

    <div class="input-container">
      <p>Price</p>
      <InputText
        placeholder="Price"
        type="number"
        v-model="createBookData.price"
        min="1"
        step="any"
      />
    </div>

    <div class="input-container multiselect">
      <p>Authors</p>
      <MultiSelect
        v-model="createBookData.authors"
        :options="authors"
        optionLabel="name"
        placeholder="Select Author(s)"
      />
    </div>
    <Button label="Add" @click="createBook({ payload: createBookData })" />
  </Dialog>

  <Dialog
    header="Update Book"
    v-model:visible="displayUpdateBookModal"
    :modal="true"
  >
    <div class="input-container">
      <p>Title:</p>
      <InputText placeholder="Title" v-model="updateBookData.title" />
    </div>

    <div class="input-container">
      <p>Price:</p>
      <InputText
        type="number"
        placeholder="Price"
        v-model="updateBookData.price"
      />
    </div>

    <div class="input-container">
      <p>Authors</p>

      <MultiSelect
        v-model="updateBookData.authors"
        :options="authors"
        placeholder="Select Author(s)"
      >
        <template #value="slotProps">
          <div class="multiselect-pre-selected">
            <p v-for="(author, index) in slotProps.value" :key="index">
              <template v-if="index == slotProps.value.length - 1">
                {{ `${author.name}` }}
              </template>
              <template v-else>
                {{ author.name + "," + "&nbsp;" }}
              </template>
            </p>
          </div>
        </template>
        <template #option="slotProps">
          <p>{{ slotProps.option.name }}</p>
        </template>
      </MultiSelect>
    </div>
    <Button label="Update" @click="updateBook()" />
    <!-- <p>{{ updateBookData.authors }}</p> -->
  </Dialog>

  <div class="container">
    <div class="options">
      <Button
        icon="pi pi-plus"
        iconPos="left"
        label="Create new entry"
        @click="openCreateBookModal()"
      ></Button>
      <Button
        label="Delete"
        :disabled="isDeleteButtonDisable"
        icon="pi pi-trash"
        icon-pos="left"
        class="p-button-danger"
        @click="removeBooks()"
      />
    </div>
    <DataTable
      :value="books"
      dataKey="id"
      class="row-class"
      :rowHover="true"
      v-model:selection="selectedBooks"
      v-model:filters="filters"
      :globalFilterFields="['title']"
      filterDisplay="menu"
    >
      <template #header>
        <div class="header">
          <div>
            <h1>Books</h1>
          </div>

          <div class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              placeholder="Search"
              v-model="filters.global.value"
            ></InputText>
          </div>
        </div>
      </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

      <Column header="Id" field="id" />
      <Column header="Title" field="title" sortable>
        <template #filter="{ filterModel }">
          <InputText
            type="text"
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column header="Price" field="price" sortable>
        <template #body="{ data }">
          <p>{{ `R$ ${Number(data.price)}` }}</p>
        </template>
      </Column>
      <Column header="Author">
        <template #body="{ data }">
          <div
            v-for="(author, index) in data.authors"
            :key="index"
            class="author-container"
          >
            <div class="rounded">
              <img :src="author.image" alt="author-image" />
            </div>
            <p>
              {{ author.name }}
            </p>
          </div>
        </template>
      </Column>
      <Column header="Cover">
        <template #body="{ data }">
          <div class="rounded">
            <img :src="data.cover" alt="book-cover" />
          </div>
        </template>
      </Column>
      <Column header="options">
        <template #body="{ data }">
          <div>
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-text p-button-secondary"
              @click="openUpdateBookModal({ id: data.id })"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-text p-button-secondary"
              @click="removeBook({ id: data.id })"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { BookService } from "../data/books";
import Dialog from "primevue/dialog";
import MultiSelect from "primevue/multiselect";
import { FilterMatchMode } from "primevue/api";

export default {
  name: "data-table-challenge",
  components: {
    DataTable,
    Column,
    Button,
    InputText,
    Dialog,
    MultiSelect,
  },
  watch: {
    selectedBooks(selected) {
      if (selected.length > 0) {
        console.log("books selected", selected);
        this.isDeleteButtonDisable = false;
      } else {
        this.isDeleteButtonDisable = true;
      }
    },
  },
  created() {
    this.bookService = new BookService();
    this.books = this.bookService.books;
    this.authors = this.bookService.authors;
  },
  data() {
    return {
      bookService: null,
      books: null,
      authors: null,
      createBookData: {
        title: "",
        price: "",
        authors: null,
      },
      updateBookData: null,
      selectedBooks: null,
      displayCreateBookModal: false,
      displayUpdateBookModal: false,
      isDeleteButtonDisable: true,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  methods: {
    onCreateBookModalClose() {
      this.createBookData = {
        title: "",
        price: "",
        authors: "",
      };
    },
    openCreateBookModal() {
      this.displayCreateBookModal = true;
    },
    createBook({ payload }) {
      this.bookService.createBook({ payload });
      this.displayCreateBookModal = false;
      this.createBookData = {
        title: "",
        price: "",
        authors: "",
      };
    },
    openUpdateBookModal({ id }) {
      let recordCopy = JSON.stringify(this.bookService.findBook({ id }));
      this.updateBookData = JSON.parse(recordCopy);
      console.log("updated book data", this.updateBookData);
      this.displayUpdateBookModal = true;
    },
    updateBook() {
      this.bookService.updateBook({ payload: this.updateBookData });
      this.displayUpdateBookModal = false;
    },
    removeBook({ id }) {
      console.log("in remove", id);
      this.bookService.removeBook({ id });
    },
    removeBooks() {
      console.log(this.selectedBooks);
    },
  },
};
</script>
<style src="../scss/data-table-challenge.scss" lang="scss" />
