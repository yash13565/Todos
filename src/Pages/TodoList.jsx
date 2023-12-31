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
      completed:false
    },
  ]);
  const [show, setShow] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [search, setSearch] = useState("");
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

  function handleDelete(id) {
    const filterData = userData.filter((item) => item.id !== id);
    setUserData(filterData);
  }

  function updateData(id) {
    const updatedUserData = userData.map((item) =>
      item.id === id ? { ...item, name: updateValue } : item
    );
    setUserData(updatedUserData);
    setUpdateValue("");
  }

  function handleToggle() {
    setShow(!show);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleComplete(id){
    const completedTodo = userData?.map(x=> x.id === id ? {...x,completed:true}:x)
    setUserData(completedTodo)
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
        <TodoCard
          userData={userData}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleUpdate={updateData}
          show={show}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          search={search}
          handleSearch={handleSearch}
          handleComplete={handleComplete}
        />
      </div>
    </>
  );
}

export default TodoList;
