export const About = () => import('../..\\components\\About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Ajakan = () => import('../..\\components\\Ajakan.vue' /* webpackChunkName: "components/ajakan" */).then(c => wrapFunctional(c.default || c))
export const Alamat = () => import('../..\\components\\Alamat.vue' /* webpackChunkName: "components/alamat" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Gallery = () => import('../..\\components\\Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Program = () => import('../..\\components\\Program.vue' /* webpackChunkName: "components/program" */).then(c => wrapFunctional(c.default || c))

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
