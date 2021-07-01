<template>
  <label class="field">
    <div class="caption">{{ label }}</div>
    <input class="input" type="text" :placeholder="isRequired ? 'Required' : ''" :required="isRequired" />
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    isRequired: Boolean
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.field
  height 90px
  box-sizing border-box
  border-radius 10px
  overflow hidden
  display flex
  background white
  @media (max-width md)
    border-radius 0

.caption
  display flex
  align-items center
  padding 0 40px
  height 100%
  box-sizing border-box
  font-weight bold
  color text-on-white
  min-width 25%
  text-align center
  font-size 20px
  overflow visible
  @media (max-width md)
    padding 0 20px


.input
  padding-right 40px
  padding 0
  font-size 20px
  border none
  &:focus
    outline none
  @media (max-width md)
    padding-right 20px
    text-align center
</style>
