<template>
  <div class="navigation" :class="{ 'on-black': onBlack }">
    <transition name="navigation-list">
      <ul v-show="isOpen" class="navigation-list">
        <router-link v-on:click.native="setIsOpen(false)" class="navigation-item" tag="li" to="/about">
          <a class="navigation-link"><div class="link-caption">About</div></a>
        </router-link>
        <router-link v-on:click.native="setIsOpen(false)" class="navigation-item" tag="li" to="/portfolio">
          <a class="navigation-link"><div class="link-caption">Portfolio </div></a>
        </router-link>
        <router-link v-on:click.native="setIsOpen(false)" class="navigation-item" tag="li" to="/contact-me">
          <a class="navigation-link"><div class="link-caption">Contact me</div></a>
        </router-link>
      </ul>
    </transition>
    <div class="button-block">
      <transition name="button">
        <MoreButton v-show="!isOpen" :onBlack="onBlack" v-on:click.native="setIsOpen(true)" class="button" />
      </transition>
      <transition name="button">
        <CloseButton v-show="isOpen" :onBlack="onBlack" v-on:click.native="setIsOpen(false)" class="button" />
      </transition>
    </div>
  </div>
</template>

<script>
import ImportedImage from 'components/ImportedImage'
import MoreButton from 'components/MoreButton'
import CloseButton from 'components/CloseButton'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    setIsOpen(shouldBeOpen) {
      this.isOpen = shouldBeOpen
    }
  },
  components: {
    MoreButton,
    CloseButton
  },
  props: {
    onBlack: Boolean
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.navigation
  position relative

  height 100%
  width 35px
  @media (max-width: md)
    position static

.navigation-list
  list-reset()

  position absolute
  top 0
  left 0
  transform translateX(-100%)

  display flex
  height 100%
  @media (max-width: md)
    flex-direction column
    width 100vw
    top 90px
    z-index 50
    height 100vh
    background header-on-white
    transform translate(0)
    .on-black &
      background header-on-black
    @supports (backdrop-filter blur(20px))
      backdrop-filter blur(30px)

.navigation-link
  display flex
  justify-content center
  align-items center

  height 100%
  width auto
  box-sizing border-box

  text-decoration none
  font-size 18px
  font-weight bold
  color text-on-white
  white-space nowrap
  cursor pointer
  .on-black &
    color text-on-black
  @media (max-width: md)
    font-size 34px
    justify-content flex-start

.link-caption
  padding-left 20px
  padding-right 20px
  &:last-child
    padding-right 40px
  @media (max-width: md)
    margin 0 36px
    padding-top 20px
    padding-left 20px


.button-block
  position relative

  height 100%
  width 34px

.button
  position absolute
  top 50%
  transform translateY(-50%)

@keyframes moreEnter
  from
    transform translateY(-50%) rotate(90deg) scale(1.5)
    opacity 0

  to
    transform translateY(-50%) rotate(0) scale(1)
    opacity 1


@keyframes moreLeave
  from
    transform translateY(-50%) rotate(0) scale(1)
    opacity 1

  to
    transform translateY(-50%) rotate(-90deg) scale(0.5)
    opacity 0


@keyframes navigationListEnter
  from
    opacity 0
    transform translateX(-80%)

  to
    transform translateX(-100%)
    opacity 1

@keyframes navigationListEnterMobile
  from
    opacity 0
    transform translateX(20%)
  to
    transform translateX(0)
    opacity 1

.button-enter-active
  animation moreEnter .3s
.button-leave-active
  animation moreLeave .3s
.navigation-list-enter-active
  animation navigationListEnter .3s
  @media (max-width md)
    animation navigationListEnterMobile .3s
.navigation-list-leave-active
  animation navigationListEnter .3s reverse ease-in
  @media (max-width md)
    animation navigationListEnterMobile .3s reverse ease-in
</style>
