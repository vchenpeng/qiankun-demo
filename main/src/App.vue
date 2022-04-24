<template>
  <div id="app">
    <router-view></router-view>
    <div id="container"></div>
  </div>
</template>

<script>

export default {
  // mounted () {
  //   registerMicroApps(
  //     [
  //       {
  //         name: 'app1',
  //         entry: '//localhost:8081',
  //         container: '#container',
  //         activeRule: '/sub',
  //         props: {},
  //       },
  //     ],
  //     {
  //       beforeLoad: (app) => console.log('before load', app.name),
  //       beforeMount: [(app) => console.log('before mount', app.name)],
  //     },
  //   );
  //   start({
  //     // prefetch: 'all',
  //     // singular: true,
  //     // fetch (url, args = {}) {
  //     // },
  //     fetch (url, args = {}) {
  //       const headers = {
  //         qiankun: version
  //       };
  //       args.headers = headers;
  //       return window.fetch(url, args);
  //     }
  //   })
  // },
  methods: {
    jumpToDetail () {
      this.$router.push('/detail');
    },
    jumpToSub () {
      history.pushState(null, 'sub', '/sub/index');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
