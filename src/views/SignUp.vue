<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">

                <h1 class="title">Register</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>University</label>
                        <div class="control">
                            <input type="text" class="input" v-model="University">
                        </div>
                    </div>

                    <div class="field">
                        <label>Graduation year(optional)</label>
                        <div class="control">
                            <input type="text" class="input" v-model="Graduation_year">
                        </div>
                    </div>

                    <div class="field">
                        <label>Area of Study</label>
                        <div class="control">
                            <input type="text" class="input" v-model="AreaOfStudy">
                        </div>
                    </div>

                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="text" class="input" v-model="Email">
                        </div>
                    </div>

                    <div class="field">
                        <label>Username</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <label>Repeat password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password2">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Sign up</button>
                        </div>
                    </div>

                    <hr>

                     <router-link to="/login">click here</router-link> to log in!
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            University:'',
            Graduation_year:'',
            AreaOfStudy:'',
            Email:'',
            errors: [],
            verified:false
        }
    },
    methods: {
        submitForm() {
            this.errors = []
            if (this.University === '') {
                this.errors.push('university is missing')
            }
            if (this.email === '') {
                this.errors.push('email is missing')
            }
            if (this.AreaOfStudy === '') {
                this.errors.push('area of study is missing')
            }
            if (this.username === '') {
                this.errors.push('The username is missing')
            }
            if (this.password === '') {
                this.errors.push('The password is too short')
            }
            if (this.password !== this.password2) {
                this.errors.push('The passwords doesn\'t match')
            }
            if (this.errors.length==0) {
                localStorage.username = this.username;
                localStorage.password = this.password;
                this.verified = true;
                this.errors.push('SignUp successfully')
                this.$router.push("/login")
            }
            console.log(this.username+" "+this.University+this.password+" "+this.AreaOfStudy+" "+this.Email)
        },

    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
}
body{
  background-color:rgb(245,245,245);
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100px;
}

.text-center{
  text-align:center;
}

.b-nav{
    text-align: left;
}
</style>
