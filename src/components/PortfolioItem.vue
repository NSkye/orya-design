<template>
  <li class="portfolio-item-wrapper">
    <router-link tag="div" class="portfolio-item" :to="link">
      <a class="portfolio-item-container">
        <img class="item-image" :src="image"/>
        <div class="item-content">
          <div class="item-type">{{ type }}</div>
          <div class="item-name">{{ name }}</div>
        </div>
      </a>
    </router-link>
  </li>
</template>

<script>
import image from 'assets/smart-car-project-preview-sm.png'

export default {
  props: {
    image: String,
    type: String,
    name: String,
    link: String
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.portfolio-item-wrapper
  width 22vw
  @media (min-width: 1920px)
    width 430px
  @media (max-width: lg)
    width 300px
  @media (max-width: sm)
    width 100%

.portfolio-item
  position relative
  height 0
  padding-bottom 105%
  border-radius 20px
  box-shadow base-shadow
  overflow hidden
  @media (max-width: sm)
    border-radius 0
    padding-bottom 90%

.portfolio-item-container
  position absolute
  text-decoration none
  top 0
  left 0
  display block
  height 100%
  width 100%

.item-image
  background black
  height 70%
  width 100%
  object-fit cover

.item-content
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  padding 0 9%
  height 30%
  @media (max-width: sm)
    box-sizing border-box
    padding 0 18px
    width 100%
    flex-direction row-reverse
    align-items center
    justify-content space-between

.item-type
  color personal-title
  text-transform uppercase
  font-size 0.8vw
  padding-bottom 0.04vw
  font-weight bold
  @media (min-width: 1920px)
    font-size 16px
    padding-bottom 8px
  @media (max-width: lg)
    font-size 16px
    padding-bottom 8px

.item-name
  font-size 1.2vw
  font-weight bold
  color text-on-white
  @media (min-width: 1920px)
    font-size 24px
  @media (max-width: lg)
    font-size 24px
</style>

