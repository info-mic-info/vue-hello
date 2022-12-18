const {
    createApp
} = Vue;


createApp({
    data(){
        return{
            message : null,
            url: `https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`
        }
    }
}).mount('#app')