<template>
  <section class="m-header q-pa-xs row items-center justify-around">
    <picture class="m-header__brand col-md-2 cursor-pointer" @click="goToHome">
      <q-img
        width="200px"
        src="https://kusawasi.herokuapp.com/images/logo_negro_1.png?332c963854177d06930685effddc9900"
      />
    </picture>
    <q-tabs
      active-color="teal-6"
      class="m-header__nav col-md-7"
      inline-label
      narrow-indicator
    >
      <q-route-tab
        class="m-header__nav__item col"
        :icon="itemOne.icon"
        :label="itemOne.label"
        :to="{ name: itemOne.name }"
        no-caps
        exact
      />
      <q-btn-dropdown
        auto-close
        no-caps
        :label="itemWithChildren.label"
        :icon="itemWithChildren.icon"
        text-color="grey-8"
        rounded
        outline
        padding="10px"
      >
        <q-list>
          <q-item
            v-for="child in itemWithChildren.children"
            :key="child.id"
            clickable
          >
            <q-item-section>{{ child.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-route-tab
        v-for="item in restItems"
        :key="item.id"
        class="m-header__nav__item col"
        :icon="item.icon"
        :label="item.label"
        :to="{ name: item.name }"
        exact
        no-caps
      />
    </q-tabs>
    <div class="m-header__actions col-mod-3">
      <q-btn
        class="m-header__actions__btn --singIn"
        label="Ingresar"
        no-caps
        push
        text-color="white"
      />
      <q-btn
        class="m-header__actions__btn --account"
        label="Crear Cuenta"
        no-caps
        push
        text-color="grey-7"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { navItems } from '@/helpers/index';
import { NavItems } from '@/types';

export default defineComponent({
  name: 'KuHeader',
  setup() {
    const router = useRouter();
    const items = ref<NavItems[]>(navItems);
    const itemOne = ref<NavItems>(navItems[0]);
    const itemWithChildren = ref<NavItems>(navItems[1]);
    const restItems = ref<NavItems[]>(navItems.slice(2));

    const goToHome = () => {
      void router.push({ name: 'home' });
    };

    return {
      items,
      itemOne,
      restItems,
      itemWithChildren,
      goToHome,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@import './header.scss';
</style>
