<template>
  <div>
    <!-- name은 css의 이름과 관련, tag는 말그대로 어떤 태그로 정의하는지 의미 -->
    <transition-group name="list" tag="ul"> 
      <li v-for="(todoItem, index) in this.getTodoItems" v-bind:key="todoItem.item" class="shadow"><!--v-for의 내장 index-->
      <svg v-on:click="toggleCompleted({todoItem, index})" v-bind:class="{checkBtnCompleted: todoItem.completed}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        <!-- v-bind로 todoItem.completed에 따라 class 부여되도록 -->
        <span v-bind:class="{textCompledted: todoItem.completed}">{{todoItem.item}}</span> 
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <svg class="trashIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </span>
      </li>
    </transition-group> 
    

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  methods: {

    ...mapMutations({
      //인자를 따로 지정하지 않아도 함수 실행 시 넘기는 인자가 있다면 자동으로 넘김 단 1개 한정
      removeTodo: 'removeOneTodo'
    }),
    ...mapMutations({
      toggleCompleted: 'todoCompleted'
    })

  },
  computed:{
    // todoItems(){
    //   return this.$store.getters.getTodoItems
    // }
    ...mapGetters(['getTodoItems']),//getter의 이름과 실제 사용 이름이 같을 때 //배열 리터럴
    ...mapGetters({//getter의 이름과 실제 사용 이름이 다를 때 //객체 리터럴
      todoItems: 'getTodoItems'
    })
  }
}
</script>

<style scoped>
  ul{
    list-style-type: none; 
    padding-left: 0px; 
    margin-top: 0; 
    text-align: left;
  }
  li {
    display: flex; 
    min-height: 35px;
    height: 35px;
    line-height: 35px;
    margin: 0.5rem;
    padding:
    0.9rem;
    background:
    white;
    border-radius: 5px;
  }
  .checkBtn {
    width: 20px;
    height: 20px;
    color: #62acde;
    margin-top: 0.5rem;
    margin-right: 0.2rem;

  }
  .checkBtnCompleted {
    color:#b3adad;
  }
  .textCompledted{
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }
  .trashIcon{
    width: 20px;
    height: 20px;
    background-color: lightgrey;
    border-radius: 5px;
  }

  /* 리스트 아이템 트랜지션 효과 */
  .list-item {
  display: inline-block;
  margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>