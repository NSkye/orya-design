<template>
  <footer class="footer" :class="{ 'on-black': onBlack }">
    <div class="footer-container">
      <Logo class='logo' :onBlack="onBlack" />
      <div class="social-links">
        <a class="social-link" href="https://www.behance.net/oryashh" target="_blank">
          <ImportedImage name="behance" :injectable="true" aria-label="behance" />
        </a>
        <a class="social-link" href="https://dribbble.com/beerbongsnbentleys" target="_blank">
          <ImportedImage name="dribble" :injectable="true" aria-label="dribble" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from 'components/Logo'
import ImportedImage from 'components/ImportedImage'

export default {
  components: {
    Logo,
    ImportedImage
  },
  props: {
    onBlack: Boolean
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.footer
  display flex
  justify-content center
  align-items center

  height 90px
  width 100%
  box-sizing border-box

  background white
  
  &.on-black
    background black

.footer-container
  display flex
  justify-content space-between
  align-items center

  max-width max-container-width
  width 100%
  height 100%
  box-sizing border-box

  padding-left 40px
  padding-right 40px

  background footers-on-white

  .on-black &
    background footers-on-black

.social-links
  display flex

  height 100%

.social-link
  display flex
  justify-content center
  align-items center

  height 100%

  padding-left 40px
  padding-right 40px

  transition all .2s

  color text-on-white
  cursor pointer
  @media (max-width md)
    padding-left 18px
    padding-right 18px
  .on-black &
    color text-on-black
  &:hover
    color personal-title
  &:first-child
    margin-left auto
  &:last-child
    padding-right 0


@media (max-width md)
  .logo
    display none
</style>
