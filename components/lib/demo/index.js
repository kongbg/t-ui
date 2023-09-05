import temp from './src/main.vue'

const comp =  {
    install: Vue => Vue.component(temp.name, temp)
}

export default comp;