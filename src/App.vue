<template>
  <div class='main'>
    <Header v-bind:onBlack="isDarkTheme" />
    <transition name="page">
      <router-view @setDarkTheme="setDarkTheme"></router-view>
    </transition>
    <Footer v-bind:onBlack="isDarkTheme" />
  </div>
</template>

<script>
import Header from 'components/Header'
import Footer from 'components/Footer'

export default {
  data() {
    return {
      isDarkTheme: false
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    MainContainer() {
      return this.$route
    }
  },
  methods: {
    setDarkTheme(value) {
      this.isDarkTheme = value
    }
  }
}
</script>

<style lang='stylus' scoped>
.main
  display flex
  flex-direction column
  min-height 100vh
</style>

<style lang='stylus'>
  @import '~@/variables'
  html
    font-size 10px

  body
    font-family 'Inter', Arial, sans-serif
    overflow-x hidden

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.page
  margin-top 90px
  box-sizing border-box
  min-height calc(100vh - 90px)
  flex-grow 1
  &-enter-active
    animation zoomIn .5s
  &-leave-active
    animation zoomOut .3s
</style>
