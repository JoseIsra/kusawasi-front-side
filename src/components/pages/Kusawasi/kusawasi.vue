<template>
  <div>
    <t-kusawasi />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TKusawasi from 'templates/Kusawasi';

export default defineComponent({
  name: 'PKusawasi',
  components: { TKusawasi },
});
</script>

<style scoped></style>
