<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
            <img class="logo" style="float: left;" src="/booklogo.png" alt="london"/>
        </router-link>
        <span class="text" style="left: 70px;">website name</span>
  
        <!-- <div class="text" style="left: 35%">
            <input type="text" class="input" v-model="search">
        </div>  -->
  
        <span class="text" style="right: 270px" v-if="verified" display>WashU in St. Louis</span>
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
    <div class="box1">
      <span>Review Title: {{ review.title }}</span>
      <button  @click="toggle" style="margin-left: 700px;">Report inappropriate content</button>
      <p v-if="awesome" style="margin-left: 700px;">select from the following <select>
        <option>racism</option>
        <option>not related information</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      </p>
    </div>
    <div class="box3">
      <span style="margin: 30px;">Author: {{ review.author }}</span>
      <span style="margin: 30px;">Professor: {{ review.professor_name }}</span>
      <span style="margin: 30px;">Semester: {{ review.semester }}</span>
      <span style="margin: 30px;">Department: {{ review.department_name }}</span>
      <span style="margin: 30px;">Washington University in St. Louis</span>
      <span style="margin: 30px;">Post Date: {{ review.post_date }}</span>
    </div>
    <div class="box4">
      <p>Overall Rating: {{ review.rating }}</p>
      <p>Difficulty: {{ review.difficulty }}</p>
      <p>Workload: {{ review.workload }}</p>
      <p>Year when Taken: {{ review.class_year_taken }}</p>
      <p>Class Type: {{review.class_type}}</p>
      <p>Time Spent per Week: {{review.time_per_week}}</p>
      <p>Professor Helpfulness: {{review.professor_helpfulness}}</p>
      <p>Professor Friendliness: {{review.professor_friendliness}}</p>
      <p>Material Engagement: {{review.material_engagement}}</p>
      <p>Class Size: {{review.class_size}}</p>
      <p>Instruction Style: {{review.instruction_style}}</p>
      <p>Comment: {{review.review_text}}</p>
    </div>
    <div class="comment">
      
      <div class="add_comment">
      <br>
          <form v-on:submit.prevent="addComment">
              <div class="form-group">
                  <textarea class="form-control" id="user_comment" v-model="userComment"></textarea>
              </div>
              <div class="form-group">
                  <button type="submit">Add Comment</button>
              </div>
          </form>
      </div>
      
      <div  v-if="comments.length">
                          <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
            </div>
    </div>
  </template>
  
  
  <script>
  import axios from "axios";
  export default{
      name:'ReView',
      data(){
         console.log("id: " + this.$route.params.reviewId );
         return {
          review: [],
          search: 'search your class',
          awesome: false,
          comments: [],
          userComment: '',
          verified:'true'
         }
      },
      methods: {
        async getData() {
            try {
                // fetch tasks
                const res = await axios.get(`http://18.191.156.68:8000/api/reviews/` + this.$route.params.reviewId +'/' );
                this.review = res.data;
                
                const res2 = await axios.get(`http://18.191.156.68:8000/api/comments/?review=` + this.$route.params.reviewId );
                this.comments = res2.data;
                console.log(this.comments.length);
            } catch (error) {
                // log the error
                console.log(error);
            }
        },
        async addComment(){
            try {
                // Send a POST request to the API
                console.log('comment: ' + this.userComment);
                const response = await axios.post('http://18.191.156.68:8000/api/comments/', {
                    review: this.$route.params.reviewId,
                    text: this.userComment
                });
                // Append the returned data to the tasks array
                console.log("pushing " + response.data);
                this.comments.push(response.data);
                // Reset the title and description field values.
            } catch (error) {
                // Log the error
                console.log(error);
            }
        }
        },
        created() {
            // Fetch tasks on page load
            this.getData();
        }
  }
  </script>
  <style scoped>
  .box1 {
    margin-left: 150px;
    text-align: left;
  }
  .box3 {
    margin: 10px;
    margin-left: 120px;
    text-align: left;
  }
  .box4 {
    margin-left: 150px;
    margin-right: 150px;
    text-align: left;
    border-style: solid;
    border-width: 3px;
    border-bottom-color: #000;
    padding: 10px;
  }
  .comment {
    margin-top: 30px;
    margin-left: 150px;
    margin-right: 150px;
    text-align: left;
    border-style: solid;
    border-width: 3px;
    border-bottom-color: #000;
    padding: 10px;
  }
  </style>