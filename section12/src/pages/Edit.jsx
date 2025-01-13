import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary"; 

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if(window.confirm("정말 삭제하겠습니까?")) {
            onDelete(params.id);
            nav('/', { replace: true});
        }
    };

    const onSubmit = (input) => {
        if(window.confirm("일기를 수정하시겠습니까?")) {
            
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotionId, 
                input.content
            );
            nav("/", {replace: true});
        }
    };

    return (
        <div>
            <Header
            title={"일기 수정하기"}
            leftChild={<Button onClick={() => nav(-1)}text={"< 뒤로 가기"}/>}
            rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;