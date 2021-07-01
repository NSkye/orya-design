<template>
  <input :class="['submit', { 'enabled': isEnabled }]" type="submit" :form="form" :value="caption"/>
</template>

<script>
export default {
  props: {
    form: String,
    caption: String,
    isEnabled: Boolean
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.submit
  background transparent
  text-align center
  padding 30px 0
  font-size 24px
  font-weight bold
  color text-on-white
  opacity .5
  box-sizing border-box
  border 4px solid transparent
  border-radius 45px
  max-width 390px
  width 100%
  margin-bottom 40px
  transition all .3s
  &:focus
    outline none
  @media (max-width md)
    font-size 17px
    padding 18px

.enabled
  opacity 1
  color text-on-white
  border-color hovers-on-white
  cursor pointer
</style>
