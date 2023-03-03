import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

function Gasless(props) {

  const {connectedAccount, stateProps} = props;  
  
  const web3 = stateProps.web3
  const contract = stateProps.contract
  const accounts = stateProps.accounts
  //console.log('Page des Proposals')

  const [addMessage, setAddMessage] = useState('')
  const [warning, setWarning] = useState(false)
  
  //useEffect on "accounts" state value change
  useEffect(() => {
    (async function() {
      console.log('useEffect')  
    })()
  }, [accounts])


  const warningMsg = warning && <div className="alert alert-danger mt-4" role="alert"> Veuillez indiquer un Proposal </div>

  const addNewMessage = async (newMessage) => {
    if (newMessage !== "") {
        
        console.log('Send transaction to metamask to add set new message')
        await contract.methods.setAddMessage(newMessage).send({from: connectedAccount})
        
        console.log("msg")
        setWarning(warning ? !warning : warning);
        setAddMessage('')
    }  
    else {
        setWarning(true);
    }    
  }

  const handleSubmitAddMessage = (event) => {
    event.preventDefault()  
    console.log('addMessage : ' + addMessage)
    addNewMessage(addMessage)
  }

  const handleOnChangeAddMessage = (event) => {
    setAddMessage(event.target.value)
  }

  const displayAddMessageForm = 
    <form onSubmit={handleSubmitAddMessage}>
      
      <div className="mb-3">
        <label for="MessageInput" className="form-label">Message : </label>
        <input type="text" className="form-control" id="messageInput" aria-describedby="messageHelp" value={addMessage} onChange={handleOnChangeAddMessage}/>
        <div id="MessageHelp" className="form-text">Set a new message</div>
      </div>
      <button type="submit" className="btn btn-primary">Set Message</button>
      <br/>
      <br/>
      <br/>        
    </form>
    
  return (
    <div className="container">
      <div className="divider mt-5"><span></span><span>Set Message</span><span></span></div>
      {warningMsg}
      <br/>
      <br/>
      {displayAddMessageForm}
      <br/>
      
      
    </div>
  )
}

export default Gasless