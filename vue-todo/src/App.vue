<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addToDoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:doRemove="removeOneTodo" v-on:doCompleted="todoCompleted"></TodoList>
    <TodoFooter v-on:clearTodo="clearAllTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';

export default {
  data: function () {
    return{
      todoItems: []
    }
    
  },
  methods:{
    'addOneItem': function(newToDo){
      var obj = {completed: false, item: newToDo}; //완료 상태를 표시하기 위해 JSON형태로 객체 생성
      localStorage.setItem(newToDo, JSON.stringify(obj)); //localstorage 사용
      this.todoItems.push(obj);
    },
    'removeOneTodo': function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);//splice() 특정 인덱스에서부터 특정 개수를 지울 수 있다.
    },
    'todoCompleted': function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      //로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    'clearAllTodo': function() {

       if (confirm("정말 삭제하시겠습니까??") == true){    //확인

        localStorage.clear();
        this.todoItems = [];// window.location.reload();안해도 todoItems배열을 초기화하면 됨
        alert("삭제가 완료되었습니다.")

      }else{   //취소

        alert("삭제가 취소되었습니다.")

      }
    }
  },
  created: function(){ //뷰 라이프 사이클(생성, 마운트, 업데이트, 디스트로이드 등) // created는 hook, 즉 생성되는 시점에 실행되는 것
    if(localStorage.length > 0){
      for(var i= 0; i < localStorage.length; i++){
        // this.todoItems.push(localStorage.key(i));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

      }
    }
  },
  components:{
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
    'TodoInput': TodoInput
    
  }

}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-block-style: groove;
  height: 25px;
  
}
button:hover{
  color: blue;
}
.shadow{
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

</style>