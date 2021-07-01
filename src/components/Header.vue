<template>
  <header class="header" :class="{ 'on-black': onBlack }">
    <div class="header-container">
      <Logo :onBlack="onBlack"/>
      <Navigation :onBlack="onBlack"/>
    </div>
  </header>
</template>

<script>
import Logo from 'components/Logo'
import Navigation from 'components/Navigation'

export default {
  data() {
    return {
      navIsOpen: false
    }
  },
  components: {
    Navigation,
    Logo,
  },
  props: {
    onBlack: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/variables'

.header
  position fixed
  display flex
  justify-content center
  align-items center

  width 100%
  height 90px
  box-sizing border-box

  padding-left 40px
  padding-right 40px

  z-index 50

  background header-on-white

  &.on-black
    background header-on-black

  @supports (backdrop-filter blur(20px))
    backdrop-filter blur(30px)

  @media (max-width md)
    padding-left 20px
    padding-right 20px
    height 80px

.header-container
  display flex
  justify-content space-between
  align-items center

  max-width max-container-width
  width 100%
  height 100%
  box-sizing border-box
</style>

