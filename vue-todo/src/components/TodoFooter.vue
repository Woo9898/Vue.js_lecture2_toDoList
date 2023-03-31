<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllDB">Clear All</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearAllDB: function() {

       if (confirm("정말 삭제하시겠습니까??") == true){    //확인

        localStorage.clear();
        window.location.reload();

      }else{   //취소

        alert("삭제가 취소되었습니다.")

      }
    }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px; 
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #e20303;
  display: block;
}

</style>