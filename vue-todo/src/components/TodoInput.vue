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
            this.$emit('addToDoItem', this.newToDo)//addToDoItem 이라는 이벤트를 발생시키면서 상위 컴포넌트로 , 뒤에 인자를 넘김
            this.clearInput();
            }else{
                alert("write to register ToDo");
            }
        },
        "clearInput": function(){
            //초기화 로직
            this.newToDo= ''; 
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