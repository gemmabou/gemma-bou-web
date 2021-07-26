<template>
  <span class="menu-icon" @click="$emit('click')">&#9776;</span>
</template>

<style lang="scss">
.menu-icon {
  font-size: 2.5rem;
  cursor: pointer;
}
</style>
