<template>
  <button class="button" v-bind:class="{ 'on-black': onBlack }">
    <svg clas="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path class="path" fill-rule="evenodd" d="M11.806 9l5.613 5.613a1.984 1.984 0 1 1-2.806 2.806L9 11.806 3.387 17.42a1.984 1.984 0 1 1-2.806-2.806L6.194 9 .58 3.387A1.984 1.984 0 1 1 3.387.581L9 6.194 14.613.58a1.984 1.984 0 1 1 2.806 2.806L11.806 9z"/>
    </svg>
    <div class="focus" />
  </button>
</template>

<script>
export default {
  props: {
    onBlack: Boolean
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.button
  position relative
  display flex
  justify-content center
  align-items center

  height 34px
  width 34px

  border none
  border-radius 50%

  background none

  cursor pointer
  outline none

  & .svg
    z-index 2

  & .path
    fill text-on-white
    fill-opacity 1

    transition all .2s


  &:hover .path
    fill: hovers-on-white


  & .focus
    position absolute
    top 50%
    left 50%
    transform scale(0) translate(0, 0)

    width 1px
    height 1px

    background focus-on-white
    border-radius 50%

    transition all .2s


  &:focus .focus
    transform: scale(90) translate(0, 0)


  &.on-black
    & .path
      fill text-on-black
  

    &:hover .path
      fill hovers-on-black
  

    &:focus
      fill focus-on-black  
</style>

