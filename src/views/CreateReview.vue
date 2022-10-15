<template>
  <div class="topbar">
      <router-link to="/VisitorPage">
          <img style="float: left;" src="/logo.png" alt="london"/>
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
    <span style="font-size: 50px;">Create Review</span>
  </div>
  <div class="area1">
    <p>Department: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Class: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Instructor: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Semester Taken: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
  </div>
  <div class="area2">
    <p>Semester: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Difficulty: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Workload: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Class Type: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Time Spent per Week: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Prof.Helpfulness: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Prof.Friendliness: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Material Engagement: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Organization: 1<input type="radio" name="degree" value="1">
    <input type="radio" name="degree" value="2">
    <input type="radio" name="degree" value="3">
    <input type="radio" name="degree" value="4">
    <input type="radio" name="degree" value="5">
    5
    </p>
    <p>Class Size: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Instruction Style: <select>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </select>
    </p>
    <p>Comments:</p>
    <button>Add Comment</button>
  </div>
</template>


<script>
export default{
    name:'CreateReview',
    data(){
       return {
         search: 'search your class',
       }
    },
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
</style>
