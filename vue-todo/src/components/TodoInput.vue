<template>
  <div class="inputBox shadow">

    <label for="inputBox">ToDo: </label>
    <input id="inputBox" type="text" v-model="newToDo" v-on:keyup.enter="addToDo"><!-- 엔터가 클릭되어도 동일하게 추가되도록 -->

    <button v-on:click="addToDo" >New ToDo Add</button>
      
      <AlertModal v-if="showModal" @close="showModal = false">
        <h3 slot="header">!!경고!!</h3>
        <h3 slot="body">등록할 TODO를 입력하세요.</h3>
        <h3 slot="footer"><button @click="showModal = false">뒤로 가기</button></h3>
      </AlertModal>
      
  </div>
</template>

<script>
import AlertModal from   "./common/AlertModal.vue"

export default {
    data: function(){
        return{
            newToDo: '',
            showModal: false
        }
    },
    methods:{
        "addToDo": function(){

            if(this.newToDo !== ''){
            //저장로직
            //this.$emit('addToDoItem', this.newToDo)//addToDoItem 이라는 이벤트를 발생시키면서 상위 컴포넌트로 , 뒤에 인자를 넘김
            this.$store.commit('addOneItem', this.newToDo);
            this.clearInput();
            }else{
                this.showModal = !this.showModal
            }
            // else{
            //     alert("write to register ToDo");
            // }//해당 부분을 modal component로 좀 더 이쁘게 대체
        },
        "clearInput": function(){
            //초기화 로직
            this.newToDo= ''; 
        }

    },
    components:{
        // "AlertModal": AlertModal를 속성명 축약으로 나타낼 수 있다.
        AlertModal
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