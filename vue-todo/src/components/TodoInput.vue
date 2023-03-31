<template>
  <div class="inputBox shadow">
    <label for="inputBox">ToDo: </label>
    <input id="inputBox" type="text" v-model="newToDo" v-on:keyup.enter="addToDo"><!-- 엔터가 클릭되어도 동일하게 추가되도록 -->

    <button v-on:click="addToDo" >New ToDo Add</button>
    <!-- <span class="addContainer" v-on:click="addToDo">
        <i class="fa-solid fa-plus addBtn"></i>    
    </span> -->
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            newToDo: '' 
        }
    },
    methods:{
        "addToDo": function(){

            if(this.newToDo !== ''){
            //저장로직
            var obj = {completed: false, item: this.newToDo}; //완료 상태를 표시하기 위해 JSON형태로 객체 생성
            localStorage.setItem(this.newToDo, JSON.stringify(obj)); //localstorage 사용
            this.clearInput();
            this.reload();
            }else{
                alert("write to register ToDo");
            }
        },
        "clearInput": function(){
            //초기화 로직
            this.newToDo= ''; 
        },
        "reload": function(){
            window.location.reload();
        }
    }

}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    width: 60rem;
    margin: 0 auto;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;

}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>