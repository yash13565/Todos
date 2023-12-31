/* eslint-disable react/prop-types */
import Button from '../../Atoms/Button/Button';
import './TodoCard.css'
function TodoCard(props) {
    const {userData,handleDelete} = props;
  
  return (
    <div className='main-cont'>
    {
        userData?.map((item)=>(
          
            <div key={item.id} className='cardContainer'>
                <p className='para'>{item.name}</p>
            <div className='buttonContainer'>
            <Button text={'update'} className={'buttonStyle'}/>
                <Button text={'Delete'} className={'buttonStyle'} onClick={()=>handleDelete(item.id)}/>
            </div>
            </div>
            
        ))
    }
    </div>
  )
}

export default TodoCard