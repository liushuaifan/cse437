<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
          <img style="float: left;" src="/logo.png" alt="london"/>
        </router-link>
        <span class="text" style="left: 150px;">website name</span>
    
        <router-link to="/CreateReview" class="text" style="left:800px; font-size: 45px;">Create Review</router-link> 

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
    <div style="text-align: center; font-size: 30px;">      
          <div class="control">                
          <input type="text" class="input">
          <router-link to="/Review"  style="font-size: 20px;">search class or professor</router-link> 
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    <router-link to="/ReView">
       how to nagivate website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ReView">
       what to expect from website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ReView">
       what to expect from website
    </router-link> 

    </div>
</template>


<script>
export default{
    name:'VisiTor',
    data(){
        return{
            search:'search your class'
        }
    },
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

div1{
    display:inline;
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
  width: 50px;
}

.text-center{
  text-align:center;
}

.b-nav{
  text-align: left;
}
.topbar {
  position: relative;
  text-align: center;
  font-size: 25px; 
  height: 57px; 
}
.text {
  position: absolute;
  top: 13px;
}
</style>
