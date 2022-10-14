<template>
    <div class="page-log-in">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Create Review</h1>




            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: '',
            errors: []
            
        }
    },
    mounted() {
        document.title = 'Log In | Djackets'
    },
    methods: {
       
            showerror(){
                console.log(localStorage.username)
            }        
        }
    }

</script>