/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import Modal from "../Modal/Modal";
import "./TodoCard.css";
function TodoCard(props) {
  const {
    userData,
    handleDelete,
    handleToggle,
    handleUpdate,
    show,
    updateValue,
    setUpdateValue,
    search,
    handleSearch,
    handleComplete
  } = props;
  const [value,setValue]= useState()
  return (
    <div className="main-cont">
          <h5 className="todoCount">Remaining Todos: {userData.filter(x=>!x.completed).length}</h5>
      <div className="inputContainer">
        <Input
          className="searchInput"
          placeholder="searchhere...."
          value={search}
          onChange={handleSearch}
        />
      </div>
      {userData
        ?.filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
        ?.map((item) => (
          <div key={item.id} className="cardContainer">
            <p className={item.completed? 'complete':"para"}>{item.name}</p>
            <div className="buttonContainer">
              <Button
                text={"Complete"}
                className={"buttonStyle"}
                onClick={()=>handleComplete(item.id)}
              />
              <Button
                text={"update"}
                className={"buttonStyle"}
                onClick={()=>{handleToggle();setValue(item.id)}}
              />
              <Button
                text={"Delete"}
                className={"buttonStyle"}
                onClick={() => handleDelete(item.id)}
              />
            </div>
            {show  ? (
              <Modal
                handleUpdate={() => handleUpdate(value)}
                handleToggle={handleToggle}
                updateValue={updateValue}
                setUpdateValue={setUpdateValue}
              />
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
}

export default TodoCard;
