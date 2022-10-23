<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
          <img style="float: left; border: none;" src="/booklogo.png" alt="london"/>
        </router-link>
        <span class="text" style="left: 10%;">Rate My Class</span>
    
        <router-link to="/CreateReview" class="text" style="left: 40%">Create Review</router-link> 

        <span class="text" style="right: 230px; font-size: 15px" v-if="verified" display>h</span>
        <span class="text" style="right: 230px; font-size: 15px" v-else>School</span>
        
        <router-link to="/login" class="text" style="right:130px; font-size: 15px">log in</router-link> 
        
        <router-link to="/SignUp" class="text" style="right:70px; font-size: 15px">sign up</router-link> 
      
      
      <router-link to="/ProfilE">
        <img style="float: right;" src="/log.png" alt="lon"/>
      </router-link> 
    </div>
    <br>
    <br>
    <br>
    <div style="text-align: center; font-size: 30px;">      
          <div class="control">                
          <input type="text" class="input">
          <router-link to="/Review"  style="font-size: 20px; text-decoration: none;">search class or professor</router-link> 
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    <router-link to="/ReView" style="text-decoration: none;">
       how to nagivate website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ReView" style="text-decoration: none;">
       what to expect from website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ReView" style="text-decoration: none;">
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
  background-image: linear-gradient(to bottom right,rgb(118,76,163),rgb(92,103,211));
}
.text {
  position: absolute;
  top: 13px;
  text-decoration: none;
  color: white;
  font-weight: 600;
}
</style>
