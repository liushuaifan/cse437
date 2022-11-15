<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
          <img class="logo" style="float: left;" src="/booklogo.png" alt="london"/>
        </router-link>
        <span class="text" style="left: 10%;">Rate My Class</span>
    
        <router-link to="/CreateReview" class="text" style="left: 40%">Create Review</router-link> 

        <span class="text" style="right: 230px; font-size: 15px" v-if="verified" display>WashU in St. Louis</span>
        <span class="text" style="right: 230px; font-size: 15px" v-else>School</span>
        
        <router-link to="/login" class="text" style="right:130px; font-size: 15px">log in</router-link> 
        
        <router-link to="/SignUp" class="text" style="right:70px; font-size: 15px">sign up</router-link> 
      
      
      <router-link to="/ProfilE">
        <img style="float: right;" src="/profile.png" alt="lonased"/>
      </router-link> 
    </div>
    <br>
    <br>
    
    <br>
  <div style="text-align: center; font-size: 30px;">      
        <div class="control">                
          <input type="text" class="input" v-model="search">
          <button @click="searchClass" style="font-size: 20px; text-decoration: none;">search class </button> 
        </div>
        <table class="center">
        <tr><td v-for="review in searchresult" :key="review.id">Title: <router-link :to="'/Review/' + review.id">{{review.title}}</router-link>
        <br/>Course: {{review.course_name}}<br/>Professor: {{review.professor_name}}</td></tr>
      </table>
      <br>
      <br>
      <br>
      <br>
      <table class="center">
        <tr><td v-show="isShow"  v-for="review in reviews" :key="review.id">Title: <router-link :to="'/Review/' + review.id">{{review.title}}</router-link>
        <br/>Course: {{review.course_name}}<br/>Professor: {{review.professor_name}}</td></tr>
      </table>


      <!-- <li v-for="professor in professors" :key="professor.id">
                    <p>Professor: {{ professor.name }}</p>
                </li> -->
                <!-- <div class="add_task"> -->
        <!-- <form v-on:submit.prevent="submitForm">
            <div class="form-group">
                <label for="title">Professor Name</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="description">Professor Department</label>
                <textarea class="form-control" id="description" v-model="description"></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Add Prof</button>
            </div>
        </form> -->
      <!-- </div> -->
      <br>
      <br>
      <hr>
    
    <!-- <router-link to="/ReView" style="text-decoration: none;">
       how to nagivate website
    </router-link>  -->
    <span style="padding-right:200px"></span>  
    <router-link to="/ReView/1" style="text-decoration: none;">
       sample review
    </router-link> 
    <span style="padding-right:200px"></span>  
    <!-- <router-link to="/ReView" style="text-decoration: none;">
       what to expect from website
    </router-link>  -->

  </div>
</template>


<script>
import axios from "axios";
export default{
    name:'VisiTor',
    data(){
        return{
            search:'',
            searchresult: [],
            professors: [],
            reviews: [],
            isShow:true
        }
    },
    methods: {
      async getData() {
          try {
              // fetch tasks
              const res = await axios.get(`http://18.191.156.68:8000/api/reviews/`);
              this.reviews = res.data;
              //console.log("review")
              //console.log(this.reviews.length);
          } catch (error) {
              // log the error
              console.log(error);
          }
      },
      async submitForm(){
          try {
              // Send a POST request to the API
              const response = await axios.post('http://18.191.156.68:8000/api/professors/', {
                  name: this.title
              });
              // Append the returned data to the tasks array
              console.log("pushing " + response.data);
              this.professors.push(response.data);
              // Reset the title and description field values.
              this.title = '';
              this.description = '';
          } catch (error) {
              // Log the error
              console.log(error);
          }
      },
      
      searchClass() {
        //console.log(this.search);
        this.searchresult = [];
        for (let i in this.reviews) {
            if (this.reviews[i].course_name == this.search) {
              this.searchresult.push(this.reviews[i]);
            }
            //console.log(this.reviews[i].professor_name.replace(" ",""));
            //console.log(this.search.replace(" ",""));
            if (this.reviews[i].professor_name.replaceAll(" ","") == this.search.replaceAll(" ","")) {
              this.searchresult.push(this.reviews[i]);
            }
            if(this.reviews[i].department_name == this.search){
              this.searchresult.push(this.reviews[i]);
            }
        }
        if(this.searchresult.length>0) this.isShow = false;
        else this.isShow = true;
      }
      },
      created() {
          // Fetch tasks on page load
          this.getData();
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
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 25px;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.logo {
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}
</style>