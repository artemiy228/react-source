import './Dialogs.scss'


const Dialogs = () => {
  return (
    <div className={'dialogs'}>
      <div className="dialogs-title">
        Dialogs
      </div>
      <div className="all-dialogs">
        <div className="dialog-status">*</div>
        <div className="dialogs-name">Andrew</div>
      </div>
      <div className="dialogs-message">
        <div className="dialogs-user">
          <div className="dialog-user-info">
            <div className="dialogs-user-photo">
              <img src="https://via.placeholder.com/150" alt=""/>
            </div>
            <div className="dialogs-user-name">
              name: Andrew
            </div>
          </div>
          <div className="dialogs-user-message">
            Text message by name: Andrew. <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
            asperiores blanditiis debitis dolore eius enim error laboriosam minus modi mollitia non officiis possimus
            quam quidem recusandae sequi, ut vel vitae!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs