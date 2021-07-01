<template>
  <img
    v-bind:role='injectable ? "image" : ""'
    v-bind:src='imageSource'
    v-bind:alt='altAttribute'
    v-bind:aria-label='injectable ? altAttribute : ""'
    v-bind:aria-hidden='!altAttribute'
    style='fill: currentColor'
    ref='image'
  >
</template>

<script>
import SVGInject from '@iconfu/svg-inject'

const importImages = require => require
  .keys()
  .reduce((images, key, index, array) => {
    const imagesKey = key.replace('./', '').replace(/\.(svg|png|jpg|jpeg)/, '')
    images[imagesKey] = require(key)
    return images
  }, {})

const images = importImages(require.context('../assets/', true, /\.(svg|png|jpg|jpeg)$/))
console.log(images)

export default {
  props: {
    name: String,
    altAttribute: String,
    injectable: Boolean
  },
  data() {
    return {
      imageSource: images[this.name]
    }
  },
  mounted() {
    this.injectable && SVGInject(this.$refs.image)
  }
}
</script>
