/* eslint-disable react/prop-types */
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import "./Modal.css";
function Modal(props) {
  const { handleUpdate, handleToggle, updateValue, setUpdateValue } = props;
  const handleChange = (e) => {
    setUpdateValue(e.target.value);
  };

  const handleUpdateClick = () => {
    handleUpdate();
    handleToggle();
  };

  return (
    <div className="modalContainer">
      <Button onClick={handleToggle} text={"X"} className={"closeButn"} />
      <h3 className="textCenter">Update Your Data</h3>
      <div className="inputCont">
        <Input
          onChange={handleChange}
          placeholder="update"
          className={"input"}
          value={updateValue}
        />
        <Button
          onClick={handleUpdateClick}
          text={"Update"}
          className={"buttonStyle"}
        />
      </div>
    </div>
  );
}

export default Modal;
