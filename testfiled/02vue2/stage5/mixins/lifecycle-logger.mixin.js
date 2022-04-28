export default {  
  created () {
    console.log(`${this.$options.name} 1 created `)
  },
  beforeMount () {
    console.log(`${this.$options.name} 2 about to mount`)
  },
  mounted () {
    console.log(`${this.$options.name} 3 mounted`)
  },  
  destroyed () {
    console.log(`${this.$options.name} 4 destroyed`)
  }
}