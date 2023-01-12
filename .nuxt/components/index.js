export { default as About } from '../..\\components\\About.vue'
export { default as Ajakan } from '../..\\components\\Ajakan.vue'
export { default as Alamat } from '../..\\components\\Alamat.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Program } from '../..\\components\\Program.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
