<template>
  <main class='page contact-me'>
    <transition name="other">
      <h2 v-show="!isSubmitted" class="heading">Every design is a story.</h2>
    </transition>
    <transition name="message">
      <form v-on:submit="onSubmit" v-show="!isSubmitted" id="contact-me-form" class="form">
        <TextInput v-on:input.native="refreshName" class="text-input" name="name" label="Name" :isRequired="true" />
        <TextInput v-on:input.native="refreshEmail" class="text-input" name="email" label="Email" :isRequired="true" />
        <TextareaInput v-on:input.native="refreshAbout" class="textarea-input" name="about-project" label="Tell me about your project" :isRequired="true" />
      </form>
    </transition>
    <transition name="other">
      <SubmitButton v-show="!isSubmitted" form="contact-me-form" :isEnabled="nameValue && emailValue && aboutValue" caption="Continue" />
    </transition>
    <transition name="thank">
      <div class="thank-you" v-show="showThanks">Thank you!</div>
    </transition>
  </main>
</template>

<script>
import TextInput from 'components/TextInput'
import TextareaInput from 'components/TextareaInput'
import SubmitButton from 'components/SubmitButton'

export default {
  data() {
    return {
      nameValue: false,
      emailValue: false,
      aboutValue: false,
      isSubmitted: false,
      showThanks: false
    }
  },
  mounted() {
    this.$emit('setDarkTheme', false)
  },
  components: {
    TextInput,
    TextareaInput,
    SubmitButton
  },
  methods: {
    refreshName(event) {
      this.nameValue = !!event.target.value
    },
    refreshEmail(event) {
      this.emailValue = !!event.target.value
    },
    refreshAbout(event) {
      this.aboutValue = !!event.target.value
    },
    onSubmit(event) {
      event.preventDefault()
      this.isSubmitted = true
      setTimeout(() => void this.$forceUpdate() || (this.showThanks = true), 2000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/variables'

.heading
  font-size 36px
  margin-bottom 40px
  font-weight bold
  margin-top 40px
  @media (max-width md)
    font-size 24px

.contact-me
  background-color #f5f5f5
  display flex
  flex-direction column
  justify-content center
  align-items center
  box-sizing border-box

.form
  max-width 390px
  width 100%
  display flex
  flex-direction column
  margin-bottom 7vh
  @media (min-height 575px)
    margin-bottom 40px
  @media (max-width md)
    min-width 100%

.text-input
  margin-bottom 20px
  @media (max-width md)
    margin-bottom 1px

.thank-you
  font-size 36px
  font-weight bold

@keyframes sendMessage {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}


@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.message-leave-active
  animation sendMessage 1.3s

.message-enter-active .other-enter-active
  animation fadeOut .3 reverse

.other-leave-active
  animation fadeOut .3s

.thank-enter-active
  animation fadeOut 1 reverse

</style>

