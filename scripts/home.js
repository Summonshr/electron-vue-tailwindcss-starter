const { ipcRenderer } = require('electron')

const d = new Vue({
    el: '#app',
    mounted() {
        ipcRenderer.on('data', (sender, data) => {
            this[data.key] = data.data
        })
    },
    computed: {

    },
    methods: {

    },
    data() {
        return {

        }
    }
})