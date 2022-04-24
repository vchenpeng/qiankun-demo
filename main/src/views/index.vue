<template>
  <div>
    <div>index页2</div>
    <button @click="jumpToSub">跳转微应用</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToDetail () {
      this.$router.push('/detail');
    },
    jumpToSub () {
      this.$router.push('/sub/1/aa/bb');
    }
  },
}
</script>

<style>
</style>