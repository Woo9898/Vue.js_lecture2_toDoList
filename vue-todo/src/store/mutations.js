const addOneItem = (state, newToDo) => {
    const obj = { completed: false, item: newToDo }; //완료 상태를 표시하기 위해 JSON형태로 객체 생성
    localStorage.setItem(newToDo, JSON.stringify(obj)); //localstorage 사용
    state.todoItem.push(obj);
}
const removeOneTodo = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItem.splice(payload.index, 1); //splice() 특정 인덱스에서부터 특정 개수를 지울 수 있다.
}
const todoCompleted = (state, payload) => {
    state.todoItem[payload.index].completed =
    !state.todoItem[payload.index].completed;
    //로컬스토리지 데이터 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
    payload.todoItem.item,
    JSON.stringify(payload.todoItem)
    );
}
const clearAllTodo = (state) => {
    if (confirm("정말 삭제하시겠습니까??") == true) {
    //확인

    localStorage.clear();
    state.todoItem = []; // window.location.reload();안해도 todoItems배열을 초기화하면 됨
    alert("삭제가 완료되었습니다.");
    } else {
    //취소

    alert("삭제가 취소되었습니다.");
    }
}

export {addOneItem, removeOneTodo, todoCompleted, clearAllTodo}; 