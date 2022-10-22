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
  <div class="box1">
    <span>Review Title</span>
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
    <span style="margin: 30px;">Course Title</span>
    <span style="margin: 30px;">Professor</span>
    <span style="margin: 30px;">Semester</span>
  </div>
  <div class="box4">
    <p>Overall Rating:</p>
    <p>Difficulty:</p>
    <p>Workload:</p>
    <p>Year when Taken:</p>
  </div>
  <div class="comment">
    
    <form @submit.prevent="addcomment">
    <input v-model="newComment">
    <button>Add Comment</button>    
    </form>  
    
    <div  v-if="comments.length">
                        <p v-for="comment in comments" v-bind:key="comment">{{ comment }}</p>
          </div>
  </div>
</template>


<script>


export default{
    name:'ReView',
    data(){
       return {
         search: 'search your class',
         awesome: false,
         comments: [],
         newComment: '1',
         verified:'true'
       }
    },
    methods: {
    toggle() {
      this.awesome = !this.awesome
    },
    addcomment() {
      this.comments.push(this.newComment)
      this.newComment = ''
    }
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