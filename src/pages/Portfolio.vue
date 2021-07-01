<template>
  <main class='page portfolio'>
    <div class='heading-container'>
      <div class='heading' role="heading" aria-level="2">My Projects</div>
      <div class='filters'>
        <button class='filter-button'>Web</button>
        <button class='filter-button'>Mobile Apps</button>
      </div>
    </div>
    <ul class="portfolio-list">
      <PortfolioItem v-for="item in items"
        :key="item.link"
        :image="item.image"
        :type="item.type"
        :name="item.name"
        :link="item.link"
      />
    </ul>
  </main>
</template>

<script>
import CloseButton from 'components/CloseButton'
import PortfolioItem from 'components/PortfolioItem'

const smartCarProject = {
  image: require('assets/smart-car-project-preview-sm.png'),
  type: 'commercial',
  name: 'Smart Car Project',
  link: '/smart-car-project'
}

export default {
  data() {
    return {
      items: [smartCarProject]
    }
  },
  components: {
    CloseButton,
    PortfolioItem
  },
  mounted() {
    this.$emit('setDarkTheme', false)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/variables'

.portfolio
  display flex
  flex-direction column
  box-sizing border-box
  padding 0 40px
  padding-top calc(90px + 40px)
  margin 0 auto
  width 100%
  max-width 1490px
  background-color #f5f5f5
  @media (max-width: md)
    padding-left 0
    padding-right 0

.portfolio-list
  list-reset()
  display flex
  flex-wrap wrap
  justify-content space-between
  & > li
    margin-bottom 40px
  @media (max-width: md)
    flex-direction column
    justify-content flex-start
    align-items center

.heading-container
  display flex
  justify-content space-between
  margin-bottom 40px
  @media (max-width: md)
    padding: 0 18px
    flex-direction column-reverse
    margin-bottom 16px

.heading
  color text-on-white
  font-weight bold
  font-size 36px

.filters
  display flex
  align-items center
  @media (max-width: md)
    align-self flex-end
    margin-bottom 5px

.filter-button
  color text-on-black
  background text-on-white
  border none
  display flex
  font-size 16px
  padding 8px 16px
  border-radius 16px
  margin-right 16px
  cursor pointer
  &:last-child
    margin-right 0
</style>
