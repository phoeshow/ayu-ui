import Container from './Container.vue'
import Box from './Box.vue'
import Flex from './Flex.vue'

const Grid = {}

Grid.install = Vue => {
  Vue.component(Container.name, Container)
  Vue.component(Box.name, Box)
  Vue.component(Flex.name, Flex)
}

export default Grid
