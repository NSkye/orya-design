<template>
  <div class="smartphone-image">
    <div class="smartphone-image-stretcher"></div>
    <Image name="smartphone" class="phone" /> 
    <img :src="image" :alt="altAttribute" :aria-hidden="!altAttribute" class="image" />
  </div>
</template>

<script>
import Image from 'components/Image'

export default {
  props: {
    image: String,
    altAttribute: String
  },
  components: {
    Image
  }
}
</script>


<style lang="stylus" scoped>
.smartphone-image
  position relative
  overflow hidden

.smartphone-image-stretcher
  content ''
  padding-bottom 199.4%

.phone
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 3

.image
  position absolute
  top 0
  left 0
  object-fit cover
  height 100%
  width 100%
  border-radius 20px
  z-index 2

</style>
