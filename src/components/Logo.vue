<template>
  <router-link to="/home" class="link">
    <ImportedImage class='logo-full' v-show="!onBlack" :injectable="false" name="logo-on-white" altAttribute="Orya Design" />
    <ImportedImage class='logo-full' v-show="onBlack" :injectable="false" name="logo-on-black" altAttribute="Orya Design" />
    <ImportedImage class='logo-mini' :injectable="false" name="logo-mini" altAttribute="Orya Design" />
  </router-link>
</template>

<style lang="stylus" scoped>
@import '~@/variables'

.link
  display block

.logo-mini
  display none
  height 17px
  width 28px

@media (max-width md)
  .logo-mini
    display block
  .logo-full
    display none
</style>

<script>
import ImportedImage from 'components/ImportedImage'

export default {
  props: {
    onBlack: Boolean
  },
  components: {
    ImportedImage
  }
}
</script>

