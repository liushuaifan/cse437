<template>
    <div class="topbar">
        <router-link to="/VisitorPage">
            <img style="float: left;" src="/logo.png" alt="london"/>
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
    <div class="title">
      <span style="font-size: 50px;">Create Review</span>
    </div>
  <form v-on:submit.prevent="addReview">
    <div class="area1">
      <div class="formfield">
        <label for="reviewTitle">Title: </label>
        <input class="form-control" id="reviewTitle" type="text" v-model="title">
      </div>
  
      <div class="formfield">
        <label for="author">User: test user</label>
        <input class="form-control" id="author" type="text" v-model="author">
      </div>
  
      <div > 
        <p>Department</p>                  
        <select class="form-control" v-model="department">
            <option v-for="existingDepartment in existingDepartments" :key="existingDepartment.id" :value="existingDepartment.id" >{{ existingDepartment.name }}</option>
        </select>
      </div>
     
      <div > 
        <p>Professor</p>                  
        <select class="form-control" v-model="professor">
            <option v-for="existingProfessor in existingProfessors" :key="existingProfessor.id" :value="existingProfessor.id">{{ existingProfessor.name }}</option>
        </select>
      </div>
  
      <div > 
        <p>Course</p>                  
        <select class="form-control" v-model="course">
            <option v-for="existingCourse in existingCourses" :key="existingCourse.id" :value="existingCourse.id">{{ existingCourse.name }}</option>
        </select>
      </div>
  
      <p>Semester Taken: <select v-model="semester">
        <option value="FL2022">Fall 2022</option>
        <option value="SP2022">Spring 2022</option>
        <option value="FL2021">Fall 2021</option>
        <option value="SP2021">Spring 2021</option>
        <option value="FL2020">Fall 2020</option>
        <option value="SP2020">Spring 2020</option>
      </select>
      </p>
      <p>Overall Rating: 1<input type="radio" name="rating" value="1" v-model="rating">
      <input type="radio" name="rating" value="2" v-model="rating">
      <input type="radio" name="rating" value="3" v-model="rating">
      <input type="radio" name="rating" value="4" v-model="rating">
      <input type="radio" name="rating" value="5" v-model="rating">
      5
      </p>
    </div>
    <div class="area2">
      <p>Difficulty: 1<input type="radio" name="difficulty" value="1" v-model="difficulty">
      <input type="radio" name="difficulty" value="2" v-model="difficulty">
      <input type="radio" name="difficulty" value="3" v-model="difficulty">
      <input type="radio" name="difficulty" value="4" v-model="difficulty">
      <input type="radio" name="difficulty" value="5" v-model="difficulty">
      5
      </p>
      <p>Workload: 1<input type="radio" name="workload" value="1" v-model="workload">
      <input type="radio" name="workload" value="2" v-model="workload">
      <input type="radio" name="workload" value="3" v-model="workload">
      <input type="radio" name="workload" value="4" v-model="workload">
      <input type="radio" name="workload" value="5" v-model="workload">
      5
      </p>
      <p>Year when Taken: <select v-model="classWhenTaken">
        <option value="FR">Freshman</option>
        <option value="SO">Sophomore</option>
        <option value="JR">Junior</option>
        <option value="SR">Senior</option>
      </select>
      </p>
      <p>Class Type: <select v-model="classType">
        <option value="IP">In-person</option>
        <option value="RM">Remote</option>
        <option value="HY">Hybrid</option>
      </select>
      </p>
      <p>Time Spent per Week: <select v-model="timePerWeek">
        <option value="0">0-3 hours</option>
        <option value="1">3-6 hours</option>
        <option value="2">6-9 hours</option>
        <option value="3">10+ hours</option>
      </select>
      </p>
      <p>Class Size: <select v-model="classSize">
        <option value="0">0-10 people</option>
        <option value="1">11-40 people</option>
        <option value="2">41-100 people</option>
        <option value="3">100+ people</option>
      </select>
      </p>
      <p>Instruction Style: <select v-model="instructStyle">
        <option value="LEC">Lecture</option>
        <option value="LAB">Lab</option>
        <option value="DIS">Discussion</option>
        <option value="OTH">Other</option>
      </select>
      </p>
      <p>Prof. Helpfulness: 1<input type="radio" name="helpfulness" value="1" v-model="helpfulness">
      <input type="radio" name="helpfulness" value="2" v-model="helpfulness">
      <input type="radio" name="helpfulness" value="3" v-model="helpfulness">
      <input type="radio" name="helpfulness" value="4" v-model="helpfulness">
      <input type="radio" name="helpfulness" value="5" v-model="helpfulness">
      5
      </p>
      <p>Prof. Friendliness: 1<input type="radio" name="friendliness" value="1" v-model="friendliness">
      <input type="radio" name="friendliness" value="2" v-model="friendliness">
      <input type="radio" name="friendliness" value="3" v-model="friendliness">
      <input type="radio" name="friendliness" value="4" v-model="friendliness">
      <input type="radio" name="friendliness" value="5" v-model="friendliness">
      5
      </p>
      <p>Material Engagement: 1<input type="radio" name="materialE" value="1" v-model="materialE">
      <input type="radio" name="materialE" value="2" v-model="materialE">
      <input type="radio" name="materialE" value="3" v-model="materialE">
      <input type="radio" name="materialE" value="4" v-model="materialE">
      <input type="radio" name="materialE" value="5" v-model="materialE">
      5
      </p>
      <p>Organization: 1<input type="radio" name="organization" value="1" v-model="organization">
      <input type="radio" name="organization" value="2" v-model="organization">
      <input type="radio" name="organization" value="3" v-model="organization">
      <input type="radio" name="organization" value="4" v-model="organization">
      <input type="radio" name="organization" value="5" v-model="organization">
      5
      </p>
  
      <div class="formfield">
        <label for="reviewComment">Open Comments: </label>
        <textarea class="form-control" id="reviewComment" rows="3" columns="50" v-model="reviewComment"></textarea>
      </div>
    </div>
  
    <div class="form-group">
        <button type="submit">Create Review</button>
    </div>
  </form>
  
  
  </template>
  
  
  <script>
  import axios from "axios";
  export default{
      name:'CreateReview',
      data(){
         return {
          author: 'test user',
          search: 'search your class',
          title: '',
          professor: '',
          className: 'Class Title',
          course: '',
          semester: '',
          department: '',
          workload: '',
          difficulty: '',
          classType: '',
          timePerWeek: '',
          helpfulness: '',
          friendliness: '',
          materialE: '',
          organization: '',
          
          reviewComment: '',
          verified:'true',
          existingProfessors: [],
          existingDepartments: [],
          existingCourses: [],
         }
      },
      methods: {
        async getData() {
            try {
                // fetch tasks
                const resProfs = await axios.get(`http://18.191.156.68:8000/api/professors/` );
                this.existingProfessors = resProfs.data;
                
                const resDeps = await axios.get(`http://18.191.156.68:8000/api/departments/` );
                this.existingDepartments = resDeps.data;
                const resCors = await axios.get(`http://18.191.156.68:8000/api/courses/` );
                this.existingCourses = resCors.data;
                
            } catch (error) {
                // log the error
                console.log(error);
            }
        },
        async addReview(){
            try {
                // Send a POST request to the API
                console.log(this.semester);
                console.log(this.instructStyle);
                console.log(this.classWhenTaken);
               
                const response = await axios.post('http://18.191.156.68:8000/api/reviews/', {
                    author: this.author,
                    review: this.$route.params.reviewId,
                    title: this.title,
                    course: this.course,
                    department: this.department,
                    professor: this.professor,
                    class_year_taken: this.classWhenTaken,
                    rating: parseInt(this.rating),
                    semester: this.semester,
                    difficulty: parseInt(this.difficulty),
                    workload: parseInt(this.workload),
                    class_type: this.classType,
                    time_per_week: this.timePerWeek,
                    professor_helpfulness: parseInt(this.helpfulness),
                    professor_friendliness: parseInt(this.friendliness),
                    material_engagement: parseInt(this.materialE),
                    class_size: this.classSize,
                    instruction_style: this.instructStyle,
                    
                    review_text: this.userComment
                });
                console.log(response.data);
                // Append the returned data to the tasks array
                //console.log("pushing " + response.data);
                //this.comments.push(response.data);
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
  .title {
    margin-left: 150px;
    text-align: left;
  }
  .box3 {
    margin: 10px;
    margin-left: 120px;
    text-align: left;
  }
  .area1 {
    margin-left: 150px;
    margin-right: 150px;
    text-align: left;
    border-style: solid;
    border-width: 3px;
    border-bottom-color: #000;
    padding: 10px;
  }
  .area2 {
    margin-top: 30px;
    margin-left: 150px;
    margin-right: 150px;
    text-align: left;
    border-style: solid;
    border-width: 3px;
    border-bottom-color: #000;
    padding: 10px;
  }
  .formfield * {
    vertical-align: middle;
  }
  </style>