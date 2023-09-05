import Demo from './demo'

const comps = [
    Demo
]

const install = (Vue) => {
    if (install.installed) return

    Object.keys(comps).forEach(key =>{
        Vue.component(comps[key].name, comps[key]);
    })
}

const API = {
    install
}

export default API;