import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo, useContext} from "react";
import {TodoStateContext} from "../App";

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredDate = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredDate();

    const {totalCount, doneCount, notDoneCount} =
    useMemo(() => {
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos])
    // 두번째 배열이 의존성배열!
    // 의존성배열 : deps

        // const {
        //     totalCount,
        //     doneCount,
        //     notDoneCount
        // } = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>

            <div className="todos_wrapper">
                {filteredTodos.map((todo)=> {
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </div>
        </div>
    );
}

export default List;