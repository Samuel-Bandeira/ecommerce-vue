<template>
  <div ref="dataTable">
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
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { getPhotos } from "../api/photos";
import { onMounted, onUnmounted, ref } from "vue";
export default {
  components: {
    DataTable,
    Column
  },
  setup() {
    let pageNumber = 1;
    const dataTable = ref(null);
    const dataTableData = ref([]);
    let alreadyCalledApi = false;

    onMounted(async () => {
      const { data } = await getPhotos({ page: pageNumber });
      dataTableData.value = data;
      pageNumber++;

      window.addEventListener("scroll", handleScrolledDown);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScrolledDown);
    });

    const handleScrolledDown = async () => {
      const dataTableBottom = dataTable.value.getBoundingClientRect().bottom;

      if (dataTableBottom - 5 < window.innerHeight) {
        if (alreadyCalledApi) return;

        alreadyCalledApi = true;
        const { data } = await getPhotos({ page: pageNumber });
        alreadyCalledApi = false;
        dataTableData.value.push(...data);
        pageNumber++;
      }
    };

    return {
      dataTable,
      dataTableData
    };
  },
  methods: {
    getPhotos
  }
};
</script>
