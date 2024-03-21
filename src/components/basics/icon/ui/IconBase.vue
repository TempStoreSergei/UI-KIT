<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="24"
       :height="24"
       v-if="iconName"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img"
       :fill="iconColor"
  >
    <title
        :id="`title-${iconName}`"
        lang="en">
      {{ iconName }} icon
    </title>
    <g>
      <component :is="getIconComponent" />
    </g>
  </svg>
</template>


<script setup lang="ts">
import {defineAsyncComponent, onMounted, ref, watch} from 'vue'
import type { IIcon } from "../index.ts";

const props = defineProps<IIcon>();

const getIconComponent = ref();
const loadIconComponent = async () => {
  try {
    getIconComponent.value = defineAsyncComponent(() =>
        import(`./../../../assets/icons/${props.iconName}.vue`)
    );
  } catch (error) {
    console.error('Error loading icon component:', error);
  }
};

watch(() => props.iconName, () => {
  loadIconComponent();
}, { immediate: true });

onMounted(loadIconComponent);
</script>
