<template>
  <div>
    <p>我是微应用</p>
    <button @click="jumpToMainDetail">跳回主应用详情</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToMainDetail () {
      history.pushState(null, 'sub', '/detail');
    }
  },
}
</script>
