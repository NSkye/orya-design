<template>
  <svg
    v-on:mouseover="setOnHover(true)"
    v-on:mouseout="setOnHover(false)"
    role="button"
    aria-label="more"
    tabindex="0"
    class="button"
    v-bind:class="{ 'on-black': onBlack }"
    v-bind:viewBox="viewBox"
    ref="mainElement"
    v-on:keypress="emulateClick"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path class="path" fill-rule="evenodd" v-bind:d="path" />
  </svg>
</template>

<script>
const pathRegular = 'M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
const viewBoxRegular = '0 0 30 30'
const pathHover = 'M17 33C8.163 33 1 25.837 1 17S8.163 1 17 1s16 7.163 16 16-7.163 16-16 16zm0-15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm16 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
const viewBoxHover = '0 0 34 34'

export default {
  data() {
    return {
      path: pathRegular,
      viewBox: viewBoxRegular
    }
  },
  props: {
    onBlack: Boolean
  },
  methods: {
    setOnHover(isHovered) {
      this.path = isHovered && !this.onBlack ? pathHover : pathRegular
      this.viewBox = isHovered && !this.onBlack ? viewBoxHover : viewBoxRegular
    },
    emulateClick(event) {
      console.log(event)
      if (event.key === 'Enter' || event.key === ' ') {
        this.$refs.mainElement.dispatchEvent(new Event('click'))
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.button
  height 34px
  width 34px
  box-shadow 0 0 0 0 focus-on-white
  transition all .2s
  cursor pointer
  border-radius 50%

  & .path
    fill text-on-white;
    fill-opacity 1

    stroke hovers-on-white
    stroke-opacity 0
    stroke-width 2

    transition all .2s



  &:hover .path
    fill-opacity 0
    stroke-opacity 1
  

  &:focus
    outline none
    box-shadow 0 0 0 60px focus-on-white
  

  &.on-black
    box-shadow 0 0 0 0 focus-on-black

    & .path
      fill text-on-black
      stroke none
    

    &:hover .path
      fill-opacity 1
    

    &:focus
      outline none
      box-shadow 0 0 0 60px focus-on-black
</style>
