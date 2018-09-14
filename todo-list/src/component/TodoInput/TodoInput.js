import React from 'react';

const TodoInput = ({value, onChange, onInsert}) =>{
            //input의 값 //input 내용수정 이벤트 // 추가버튼누를때 실행이벤트
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return (
        <div className="todo-input">
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className="add-button" onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;