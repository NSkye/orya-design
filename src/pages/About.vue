<template>
  <main class='page about'>
    <div class='subheading'>
      <div class="line-small">
        My name is
      </div>
      <div class="line-large">
        Orest Bedrus<ImportedImage name="logo-mini" class="line-large-logo-mini"/>
      </div>
      <div class="line-small">
        I like to design things
      </div>
    </div>
    <div class="container">
      <div class="section">
        <h3 class="heading-3">Experience</h3>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">2018</h4></div>
        <ul class="exp_list">
          <li>
            April — January
            <p>UX/UI designer, freelancer Yellow Leaf Technologies</p>
          </li>
          <li>
            May — June
            <p>UX/UI Design intern Webmil</p>
          </li>
        </ul>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">2017</h4></div>
        <ul class="exp_list">
          <li>
            November — December
            <p>UI Design intern
            Yellow Leaf Technologies</p>
          </li>
          <li>
            May — June
            <p>UI Design intern
            Yellow Leaf Technologies</p>
          </li>
        </ul>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">2016</h4></div>
        <ul class="exp_list">
          <li>
            November — December
            <p>UI Design intern
            Yellow Leaf Technologies</p>
          </li>
        </ul>
      </div>
      <div class="section">
        <h3 class="heading-3">Education</h3>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">2017 — present time</h4></div>
        <ul class="exp_list">
          <li>
            <p>Software Engineering <br> University of King Danylo</p>
          </li>
        </ul>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">2013 — 2017</h4></div>
        <ul class="exp_list">
          <li>
            <p>Software Engineering<br>
Ivano-Frankivsk Finance Commercial College of S. Granat</p>
          </li>
        </ul>
      </div>
      <div class="section">
        <h3 class="heading-3">Have experience of:</h3>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Working with clients</h4></div>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Working in cooperation with web- and iOS and Android developers</h4></div>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Site analyzis and reviewing</h4></div>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Working in a team using Agile methodology (SCRUM)</h4></div>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Wireframing</h4></div>
        <div class="flex-heading"><ImportedImage name="logo-mini" class="h4-logo-mini"/><h4 class="heading-4">Prototyping</h4></div>
      </div>
    </div>
  </main>
</template>

<script>
import ImportedImage from 'components/ImportedImage'

export default {
  mounted() {
    this.$emit('setDarkTheme', false)
  },
  components: {
    ImportedImage
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/variables'

.subheading
  background footers-on-white
  color text-on-white
  padding-top 200px
  padding-bottom 58px
  padding-left 25%
  @media (max-width: lg)
    padding-top 80px
  @media (max-width: md)
    padding-left 40px
  @media (max-width: sm)
    padding-top 70px
  @media (max-width: xs)
    padding-top 40px
    padding-bottom 20px

.line-small
  font-weight bold
  font-size 36px
  @media (max-width: lg)
    font-size 21px
  @media (max-width: sm)
    font-size 18px
  @media (max-width: xs)
    font-size 16px

.line-large
  font-weight bold
  font-size 96px
  @media (max-width: lg)
    font-size 64px
  @media (max-width: sm)
    font-size 56px
  @media (max-width: xs)
    font-size 32px

.line-large-logo-mini
  height .2em

.container
  display flex
  padding 0 40px
  justify-content space-between
  @media (max-width md)
    padding 0 20px
    flex-direction column

.heading-3
  font-size 32px
  color text-on-white
  @media (max-width xs)
    font-size 24px

.heading-4
  font-size 24px
  color hovers-on-white
  @media (max-width xs)
    font-size 18px
    
.flex-heading
  display flex
  align-items baseline

.h4-logo-mini
  min-height 18px
  display inline-block
  margin-right 18px
  @media (max-width xs)
    min-height 12px
    margin-right 12px

.exp_list
  font-size 18px
  color darkgrey
  & p
    color hovers-on-white

.section
  margin 55px 0
  margin-right 50px
  max-width 390px
</style>


