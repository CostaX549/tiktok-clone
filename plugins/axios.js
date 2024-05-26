import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.baseURL = 'http://75.101.217.134'

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
   

    return {
        provide: { 
            axios: axios
        },
    }
})