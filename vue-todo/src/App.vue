<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';

export default {
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