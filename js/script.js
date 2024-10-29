const app = Vue.createApp({
    data() {
        return {
            respuesta: '',
            mostrar: false,
            donde: '',
            visitados: '',
            proximo: '',
            verResu: false
        };
    },
    methods: {
        mostrarPreguntas() {
            this.mostrar = this.respuesta === 'si';
            this.verResu = false;
        },
        mostrarResultados() {
            this.verResu = true;
        }
    }
});

app.mount('#app'); 

