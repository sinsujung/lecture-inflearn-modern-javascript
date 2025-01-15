import './App.css';
import { useReducer, useRef , createContext, useEffect, useState } from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

  function reducer(state, action) {
    let nextState;

    switch (action.type) {
      case 'INIT': 
        return action.data;
      case "CREATE" :
        { nextState = [action.data, ...state];
          break;
        }
      case "UPDATE" :
        {nextState = state.map((item) => 
          String(item.id) === String(action.data.id)
          ? action.data 
          : item
        );
        break;
      }
      case "DELETE" :
        {nextState = state.filter(
          (item) => String(item.id) !== String(action.id)
        );
        break;
      }
        default:
          return state;
    }

    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
  }

  export const DiaryStateContext = createContext();
  export const DiaryDispatchContext = createContext();

  function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(3);

    useEffect(() => {
      const storedData = localStorage.getItem("diary");
      if(!storedData) {
        setIsLoading(false);
        return;
      }

      const parsedData = JSON.parse(storedData);
      if(!Array.isArray(parsedData)) {
        return;
      }

      let maxId = 0;
      parsedData.forEach((item) => {
        if(Number(item.id) > maxId) {
          maxId = Number(item.id)
        }
      });

      idRef.current = maxId + 1;

      dispatch({
        type:"INIT",
        data: parsedData,
      });
      setIsLoading(false);
    }, []);

    //데이터 넣기
    // localStorage.setItem('test', 'hello');
    // localStorage.setItem("person", JSON.stringify({name: "신수정"}));

    //데이터 쓰기
    // console.log(localStorage.getItem("test"));
    // console.log(JSON.parse(localStorage.getItem("person")));

    //데이터 삭제
    // localStorage.removeItem("person");

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type :"CREATE",
      data : {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch ({
      type : "UPDATE",
      data : {
        id,
        createdDate, 
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch ({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중 ...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value ={{
          onCreate, onUpdate, onDelete,
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
