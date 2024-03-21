<template>
  <button class="button" :class="{'button_full': isFull }" :type="type">
    <IconBase :icon-name="iconNameLeft" />
    <span class="button__text">
      {{ title }}
    </span>
    <IconBase :icon-name="iconNameRight" />
  </button>
</template>

<script setup lang="ts">
import { type IButton } from './../index'
import {IconBase} from "../../icon";

const props = defineProps<IButton>()
</script>

<style lang="scss">
  @import "style.module";
</style>
