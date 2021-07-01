<template>
  <main class='page home'>
    <carousel :perPage="1" :navigationEnabled="true">
      <slide>
        <router-link class="link" tag="div" to="/smart-car-project">
          <div class="slide-wrapper">
            <div class="smart-car-heading">Smart Car Concept</div>
            <div class="smart-car-subheading-wrapper">
              <div class="smart-car-subheading">Find out how your car can become smarter</div><ImportedImage name="arrow" class="arrow"/>
            </div>
            <ImportedImage name="smart-car-preview" class="smart-car-project" />
          </div>
        </router-link>
      </slide>
    </carousel>
  </main>
</template>

<script>
import ImportedImage from 'components/ImportedImage'

export default {
  mounted() {
    this.$emit('setDarkTheme', false)
  },
  components: {
    ImportedImage
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/variables'

.slide-wrapper
  position relative
  height calc(100vh - 100px)
  width 100vw
  display flex
  flex-direction column
  justify-content center
  align-items center

.smart-car-project
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  object-fit cover

.link
  cursor pointer

.smart-car-heading
  z-index 1
  font-size 72px
  font-weight bold
  color text-on-white
  text-decoration none
  text-transform uppercase
  margin-bottom 34px
  @media (max-width md)
    font-size 64px
    margin-bottom 24px
    text-align center
    padding 0 20px
  @media (max-width sm)
    font-size 32px

.smart-car-subheading
  z-index 1
  font-weight bold
  font-size 18px
  color text-on-white

.smart-car-subheading-wrapper
  display flex
  align-items center
  @media (max-width md)
    flex-direction column
    padding 0 20px
    text-align center

.arrow
  height 18px
  width 18px
  margin-left 6px
  @media (max-width md)
    margin-left 0
    margin-top 6px
    transform rotate(90deg)

</style>


