<template>
  <section class="m-help">
    <picture class="m-header__brand col-md-2 cursor-pointer">
      <q-img
        width="400px"
        src="https://kusawasi.herokuapp.com/images/logo_negro_1.png?332c963854177d06930685effddc9900"
      />
    </picture>
    <p class="text-h5">Muy Pronto... 👻</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KuHelp',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import './help.scss';
</style>
