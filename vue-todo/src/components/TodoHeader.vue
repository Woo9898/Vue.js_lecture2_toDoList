<template>
  <HEADER>
    <h1>ToDo it!</h1>
  </HEADER>
</template>

<script>
export default {

}
</script>

<style scoped>/*해당 컴포넌트에서만 유효한 style속성 지정시 scoped 사용*/
h1{
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem; /*3개 축약 시  top/right&left/bottom 순서  / rem은 최상위 요소의 font-size 를 기준으로 변환한다.*/
}
</style>