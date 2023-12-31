/* eslint-disable react/prop-types */
import Button from "../../Atoms/Button/Button";
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
  } = props;
  
  return (
    <div className="main-cont">
      {userData?.map((item) => (
        <div key={item.id} className="cardContainer">
          <p className="para">{item.name}</p>
          <div className="buttonContainer">
            <Button
              text={"update"}
              className={"buttonStyle"}
              onClick={handleToggle}
            />
            <Button
              text={"Delete"}
              className={"buttonStyle"}
              onClick={() => handleDelete(item.id)}
            />
          </div>
          {show ? (
            <Modal
              handleUpdate={() => handleUpdate(item.id)}
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
