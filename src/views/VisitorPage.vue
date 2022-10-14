<template>
    <div style="text-align: left;font-size: 40px;">
                    <img src="/logo.png" alt="london"/>
                    
                    <span style="padding-right:100px"></span>
                    websiteName
                    <span style="padding-right:200px"></span>           
                    <router-link to="/login">Create Review</router-link> 
                    <span style="padding-right:100px"></span> 
                    <div1  v-if="verified" display>h</div1>
                    <div1  v-else>School</div1>
                    <span style="padding-right:100px"></span>
                    <router-link to="/login">log in</router-link> 
                    <span style="padding-right:50px"></span>
                    <router-link to="/SignUp">sign up</router-link> 
                    <span style="padding-right:100px"></span>
                    
                    <router-link to="/ProfilE">
                      <img src="/log.png" alt="lon"/>
                    </router-link> 
    </div>
    <hr>
    <br>
    <br>
    <br>
    <div style="text-align: left;font-size: 30px;">
     
     
                   
          <div class="control">
                            
            <input type="text" class="input" v-model="search">
         
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    <router-link to="/ProfilE">
       how to nagivate website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ProfilE">
       what to expect from website
    </router-link> 
    <span style="padding-right:200px"></span>  
    <router-link to="/ProfilE">
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
  width: 100px;
}

.text-center{
  text-align:center;
}

.b-nav{
    text-align: left;
}
</style>
