<template>
  <div>
    <p>我是主应用下给sub子应用布局的页面</p>
    <div id="container"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun'
import { version } from 'qiankun/lib/version'
export default {
  props: {
    id: {
      type: String
    }
  },
  mounted () {
    registerMicroApps(
      [
        {
          name: 'app1',
          entry: '//localhost:8081',
          container: '#container',
          activeRule: '/sub/1/aa/bb',
          props: {},
        },
      ],
      {
        beforeLoad: (app) => console.log('before load', app.name),
        beforeMount: [(app) => console.log('before mount', app.name)],
      },
    );
    start({
      // prefetch: 'all',
      // singular: true,
      // fetch (url, args = {}) {
      // },

      fetch (url, args = {}) {
        const headers = {
          qiankun: version
        };
        args.headers = headers;
        return window.fetch(url, args);
      }
    })
  },
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
</style>