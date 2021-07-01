<template>
  <label class="field">
    <div class="caption">{{ label }}</div>
    <textarea class="input" :placeholder="isRequired ? 'Required' : ''" :required="isRequired" />
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
  box-sizing border-box
  border-radius 10px
  overflow hidden
  display flex
  flex-direction column
  background white
  padding 31px 40px
  min-height 200px
  @media (max-width md)
    padding 20px
    border-radius 0

.caption
  margin-bottom 10px
  width 100%
  box-sizing border-box
  font-weight bold
  color text-on-white
  text-align left
  font-size 20px

.input
  font-size 20px
  border none
  flex-grow 1
  resize none
  &:focus
    outline none
</style>
