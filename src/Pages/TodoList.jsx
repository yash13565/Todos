import { useState } from "react";
import Input from "../Components/Atoms/Input/Input";
import "./TodoList.css";
import Button from "../Components/Atoms/Button/Button";
import TodoCard from "../Components/Molecules/TodoCard/TodoCard";
function TodoList() {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState([
    {
      id: Math.random() * 100,
      name: "Yashwardhan",
    },
  ]);

  function handleAddData() {
    setUserData([
      ...userData,
      {
        id: Math.random() * 100,
        name: value,
      },
    ]);
    setValue("");
  }
  function handleDelete(id){
    const filterData = userData.filter(item=>item.id!==id)
    setUserData(filterData)
}
  return (
    <>
      <h1 className="heading">TodoList</h1>
      <div className="inputcontainer">
        <Input
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Addlist..."}
          className={"inputs"}
          value={value}
        />
        <Button
          onClick={handleAddData}
          text={"Add List"}
          className={"button"}
        />
      </div>
      <div>
        <TodoCard userData={userData} handleDelete={handleDelete}/>
      </div>
    </>
  );
}

export default TodoList;
