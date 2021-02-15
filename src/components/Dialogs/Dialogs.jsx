import './Dialogs.scss'
import {NavLink} from "react-router-dom";

const DialogNameList = ({name, id}) => {
  return (
      <div className="dialogs-list">
        <div className="dialog-status" >*</div>
        <NavLink className="dialogs-name" to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

const DialogDescriptionMessage = ({description}) => {
  return (
    <div className="dialogs-user-message">
      {description}
    </div>
  )
}

const DialogNameMessage = ({name}) => {
  return (
      <div className="dialogs-user">
        <div className="dialog-user-info">
          <div className="dialogs-user-photo">
            <img src="https://via.placeholder.com/100" alt=""/>
          </div>
          <div className="dialogs-user-name">
            name: {name}
          </div>
        </div>
        <DialogDescriptionMessage description={"Hello, my Friends!"}/>
    </div>
  )
}


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
        <DialogNameMessage name={"Sasha"}/>
        <DialogNameMessage name={"Ashot"}/>
      </div>
    </div>

  )
}

export default Dialogs