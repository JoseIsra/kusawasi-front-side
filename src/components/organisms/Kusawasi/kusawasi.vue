<template>
  <!-- // hHh LpR fFf -->
  <q-layout view="hhh lpr fff" class="o-kusawasi column">
    <q-header>
      <ku-header />
    </q-header>

    <q-page-container class="q-my-lg">
      <router-view />
    </q-page-container>

    <q-footer class="text-white">
      <ku-footer />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { KuHeader, KuFooter } from 'molecules/index';

export default defineComponent({
  name: 'Kusawasi',
  components: { KuHeader, KuFooter },
});
</script>

<style scoped lang="scss">
// $
@import './kusawasi.scss';
</style>
