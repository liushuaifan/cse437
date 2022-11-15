<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
            <img class="logo" style="float: left;" src="/booklogo.png" alt="london"/>
        </router-link>
        <span class="text" style="left: 70px;">website name</span>

        <div class="text" style="left: 35%">
            <input type="text" class="input" v-model="search">
        </div> 

        <span class="text" style="right: 270px" v-if="verified" display>h</span>
        <span class="text" style="right: 270px" v-else>School</span>
        
        <router-link to="/login" class="text" style="right:170px">log in</router-link> 
        
        <router-link to="/SignUp" class="text" style="right:70px">sign up</router-link> 
        
        
        <router-link to="/ProfilE">
        <img style="float: right;" src="/log.png" alt="lon"/>
        </router-link> 
    </div>
    <hr>
    <br>
    <br>
    <br>
    <div class="title">
    <span style="margin-left: 300px;">Profile</span>
    <button style="margin-left: 300px;">Report</button>
    </div>
    <div class="box">
    <p>Username: <input class="input" v-model="data"></p>
    <p>School: <input class="input" v-model="data"></p>
    <p>School Year: <input class="input" v-model="data"></p>
    <p>Areas of Study: <input class="input" v-model="data"></p>
    <p>Classes Taken: <input class="input" v-model="data"></p>
    <p>Email: <input class="input" v-model="data"></p>
    </div>
  
</template>


<script>
export default{
    name:'ProfilE',
    data(){
       return {
           data: '',
           search: 'search your class',
       }
    },
}

</script>
<style scoped>
.title {
  text-align: center;
  font-size: 35px;
}


.box {
  margin-left: 150px;
  margin-right: 150px;
  text-align: left;
  border-style: solid;
  border-width: 3px;
  border-bottom-color: #000;
  padding: 10px;
}

</style>