import './Dialogs.scss'
import { NavLink } from "react-router-dom";

const DialogNameList = ({name, id}) => {
  return (
      <div className="dialogs-list">
        <div className="dialog-status" >*</div>
        <NavLink className="dialogs-name" to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

const DialogNameMessage = ({name, message}) => {
  return (
      <div className="dialogs-user">
        <div className="dialog-user-info">
          <div className="dialogs-user-photo">
            <img src="https://via.placeholder.com/100" alt=""/>
          </div>
          <div className="dialogs-user-name">
            name: { name }
          </div>
        </div>
        <div className="dialogs-user-message">
          { message }
        </div>
    </div>
  )
}
const dialogNameMessages = [
  { message: 'Hello', name: 'Valera', id: 1} ,
  { message: 'Hello', name: 'Nikita', id: 2} ,
  { message: 'Hello', name: 'Artem', id: 3} ,
  { message: 'Hello', name: 'Dmitriy', id: 4} ,
  { message: 'Hello', name: 'Valera', id: 5}
]


const Dialogs = () => {
  /* All dialogs information */
  let infoData = [
    {name: 'Ashot',  id: 1},
    {name: 'Viktor', id: 2},
    {name: 'Nikita', id: 3}
  ]
  const dialogElement = infoData.map( dialog => <DialogNameList name={dialog.name}  id={dialog.id}/>)

  return (
     /* Title Block*/
    <div className={'dialogs'}>
      <div className="dialogs-title">
        Dialogs
      </div>
      {/* One Block*/}
      <div className="all-dialogs">
        { dialogElement }
      </div>

      {/* Two block */}
      <div className="dialogs-message">
        { dialogNameMessages.map(dialogNameMessage => (<DialogNameMessage
          name={dialogNameMessage.name}
          message={dialogNameMessage.message}
          id={dialogNameMessage.id}
          key={dialogNameMessage.id} />)) }
      </div>
    </div>

  )
}

export default Dialogs