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
        optionValue="id"
        placeholder="Select Author(s)"
      />
    </div>
    <Button label="Add" @click="createBook()" />
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
        optionLabel="name"
        optionValue="id"
        placeholder="Select Author(s)"
      >
      </MultiSelect>
    </div>
    <Button label="Update" @click="updateBook()" />
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
      <Column header="Author(s)">
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
      <Column header="Options">
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
      <template #empty> No records found. </template>
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
import { FilterMatchMode, FilterOperator } from "primevue/api";

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
        this.isDeleteButtonDisable = false;
      } else {
        this.isDeleteButtonDisable = true;
      }
    },
  },
  created() {
    this.bookService = new BookService();
    this.books = this.bookService.books;
    console.log(this.books);
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
      updateBookData: {
        title: "",
        price: "",
        authors: null,
      },
      selectedBooks: null,
      selectedAuthors: null,
      displayCreateBookModal: false,
      displayUpdateBookModal: false,
      isDeleteButtonDisable: true,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        title: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
        },
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
    createBook() {
      this.bookService.createBook({ bookToBeCreatedData: this.createBookData });
      this.displayCreateBookModal = false;
      this.createBookData = {
        title: "",
        price: "",
        authors: "",
      };
    },
    openUpdateBookModal({ id }) {
      const bookReference = this.bookService.books.find(
        (book) => book.id === id
      );

      this.updateBookData = {
        ...bookReference,
        authors: bookReference.authors.map((author) => author.id),
      };

      this.displayUpdateBookModal = true;
    },
    updateBook() {
      this.bookService.updateBook({ bookToBeUpdatedData: this.updateBookData });
      this.displayUpdateBookModal = false;
    },
    removeBook({ id }) {
      this.bookService.removeBook({ id });
    },
    removeBooks() {
      this.bookService.removeBooks({ books: this.selectedBooks });
      this.selectedBooks = [];
    },
  },
};
</script>
<style src="../scss/data-table-challenge.scss" lang="scss" />
