<template>
  <div class="page smart-car-project">
    <div class="screen screen-1">
      <div class="screen-1__text-content">
        <h1 class="heading-1">Smart Car</h1>
        <p class="caption">
          The idea was to develop a concept similar to smart house, but in automotive field. In the near future cars will become more and more autonomous, allowing car to ride without driver. By so, users will be able to control cars remotely using this app. 
        </p>
      </div>
      <div class="overview-1">
        <ImportedImage name="overview-1" class="overview-1__image" />
      </div>
    </div>
    <div class="screen screen-2">
      <h2 class="heading-2">Project Highlights</h2>
      <div class="overview-2">
        <ImportedImage name="sc-2" class="overview-2__image"/>
        <ImportedImage name="sc-1" class="overview-2__image"/>
        <ImportedImage name="sc-3" class="overview-2__image"/>
      </div>
    </div>
    <div class="screen screen-3">
      <div class="screen-3__text-content">
        <h3 class="heading-3">
          Home
        </h3>
        <p class="screen-3__caption">
          From main screen user can control car movement. There are three different controls: "Change/Cancel", "Add Custom Waypoints" and "Send a car". First option will override current action, and the second will add user defined waypoints to a queue. Finally, third option is a quick access menu split to two parts: one is made for custom locations and second is for parking spots. By selecting either nearest paid or free parking, car will automatically choose the best option.
        </p>
      </div>
      <div class="overview-3">
        <ImportedImage name="sc-1" class="overview-3__image"/>
      </div>
    </div>
    <div class="screen screen-3">
      <div class="screen-3__text-content">
        <h3 class="heading-3">
          Access
        </h3>
        <p class="screen-3__caption">
          User can share access permissions with their friends or family. This permissions can be permanent or strict in time. Other people can request a car and it will drive them to desired location.
        </p>
      </div>
      <div class="overview-3">
        <ImportedImage name="sc-2" class="overview-3__image"/>
      </div>
    </div>
    <div class="screen screen-3">
      <div class="screen-3__text-content">
        <h3 class="heading-3">
          Climate
        </h3>
        <p class="screen-3__caption">
          From this screen user can control almost everything related to climate controls: interior temperature, seat heating and ventilation, air distribution, defrosters etc.
        </p>
      </div>
      <div class="overview-3">
        <ImportedImage name="sc-3" class="overview-3__image"/>
      </div>
    </div>
    <router-link class="go-back" to="/portfolio">
      <a class="go-back__link"><div class="go-back__caption">Go back to portfolio page</div></a>
    </router-link>
  </div>
</template>

<script>
import ImportedImage from 'components/ImportedImage'

export default {
  mounted() {
    this.$emit('setDarkTheme', true)
  },
  components: {
    ImportedImage
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/variables'

.smart-car-project
  height 100%
  background black
  margin-top 0

.screen
  min-height 100vh
  width 100vw
  padding-top 90px
  box-sizing border-box
  padding-left 40px
  padding-right 40px
  @media (max-width md)
    padding-left 20px
    padding-right 20px

.screen-1
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  &__text-content
    font-size 10px
    @media (max-width md)
      font-size 8px

.heading-1
  font-size 9.6em
  text-transform uppercase
  color text-on-black
  text-align center
  margin-top 20vh
  margin-bottom 0.2em
  box-sizing border-box
  padding-left 20px
  padding-right 20px
  @media (max-width lg)
    font-size 7.2em
  @media (max-width md)
    font-size 6.4em
  @media (max-width sm)
    font-size 4.5em

.caption
  font-size 2.4em
  color hovers-on-black
  max-width 768px
  width 100%
  padding-left 20px
  padding-right 20px
  padding-bottom 1em
  box-sizing border-box
  margin 0 auto
  @media (max-width sm)
    font-size 2em


.overview-1
  flex-grow 1
  width 100%
  display flex
  justify-content center
  align-items flex-end
  &__image
    max-width 768px
    width 100%
    object-fit contain

.heading-2
  font-weight bold
  font-size 36px
  color header-on-white
  text-align center

.screen-2
  display flex
  flex-direction column
  align-items center

.overview-2
  flex-grow 1
  display flex
  width 100%
  max-width 1110px
  justify-content space-around
  align-items center
  flex-wrap wrap
  &__image
    width 300px
    margin-bottom 40px
    @media (max-width 979px)
      &:nth-of-type(1)
        order 2

.screen-3
  display flex
  align-items center
  justify-content center
  @media (max-width sm)
    flex-direction column
  &__text-content
    display flex
    flex-direction column
    align-items flex-start
    max-width 540px
    width 100%
    padding 20px
    font-size 10px
    @media (max-width md)
      font-size 8px
  &__caption
    font-size 2.4em
    font-weight 500
    color hovers-on-black
    @media (max-width sm)
      font-size 2em

.heading-3
  font-size 3.6em
  color header-on-white
  margin-bottom .2em

.overview-3
  display flex
  width 100%
  max-width 500px
  justify-content center
  align-items center
  align-self stretch
  &__image
    width 300px

.go-back
  display flex
  padding 75px 0
  margin 0 auto
  align-items center
  justify-content center
  text-decoration none
  &__link
    border none
    background transparent
    font-size 24px
    font-weight 500
    color hovers-on-black
    outline none
    
</style>
