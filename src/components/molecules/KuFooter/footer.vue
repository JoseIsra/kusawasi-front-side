<template>
  <section class="m-footer row items-center justify-around">
    <aside class="m-footer__info col-6 col-md-3">
      <q-toolbar>
        <q-toolbar-title>{{ categories.label }}</q-toolbar-title>
      </q-toolbar>
      <q-list>
        <q-item
          v-for="category in categories.children"
          :key="category.id"
          class="q-my-sm"
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ category.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </aside>
    <div class="m-footer__about column col-6 col-md-3">
      <div class="m-footer__about__content col">
        <h6 class="m-footer__about__content__title">Trabaja con nosotros</h6>
        <router-link
          class="m-footer__about__content__link q-ml-md"
          :to="{ name: 'with-us' }"
        >
          Únete</router-link
        >
      </div>
      <div class="m-footer__about__content col">
        <h6 class="m-footer__about__content__title">AYUDA</h6>
        <router-link
          class="m-footer__about__content__link q-ml-md"
          :to="{ name: 'help' }"
        >
          Guia de primeros pasos</router-link
        >
      </div>
      <p class="m-footer__about__content__rights text-caption col q-mt-lg">
        &copy; Copyright 2022 Kusawasi
      </p>
    </div>
    <div class="m-footer__brand col-6 col-md-3 self-start q-mt-lg">
      <picture>
        <q-img
          width="320px"
          :img-style="{ filter: 'invert()' }"
          src="https://kusawasi.herokuapp.com/images/logo_negro_1.png?332c963854177d06930685effddc9900"
        />
      </picture>
      <p class="m-footer__brand__phrase text-caption q-mt-md">
        Protección y cuidado al hogar
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { navItems } from '@/helpers/index';
import { NavItems } from '@/types';

export default defineComponent({
  name: 'KuFooter',
  setup() {
    const categories = ref<NavItems>(navItems[1]);
    return {
      categories,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@import './footer.scss';
</style>
