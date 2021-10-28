const app = Vue.createApp({
    template: '<input type=number v-model=number v-on:keyup.enter=inputUpdate></input>{{number}}' ,
    //     template: '<input v-model=number id=inputID v-bind:value=number v-on:keyup.enter=inputUpdate></input>{{number}}' ,
    data() {
        return{
            visible: true,
            title: "Hallow World!",
            number: 0,
        }
    },
    methods: {
        titleClick(){
            if(this.visible){
                this.title="You know it!"
            }
            else{
                this.title="No you don't!"
            }
            this.visible = !this.visible
        },

        inputUpdate(){
            console.log(this.number)
        }

    },
})

app.mount('#app')