import React, {useState, useEffect} from 'react'

function Eip712(props) {

  const {connectedAccount, stateProps} = props;  
  const web3 = stateProps.web3
  const contract = stateProps.contract
  const accounts = stateProps.accounts

  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    (async function() {
      console.log('useEffect contract')
      if (contract !== null) {
        let owner          = await contract.methods.owner().call();
        if (connectedAccount.toLowerCase() === owner.toLowerCase()) {
          setIsOwner(true)
        }
        else {
          setIsOwner(false)
        }
      }
    })()
  }, [contract])

  //useEffect on "accounts" state value change
  useEffect(() => {
    (async function() {
      console.log('useEffect accounts')
      if (contract !== null) {
        let owner  = await contract.methods.owner().call();
        //Set isOwner
        if (connectedAccount.toLowerCase() === owner.toLowerCase()) {
          setIsOwner(true)
        }
        else {
          setIsOwner(false)
        }
      }  
    })()
  }, [accounts])


  return (
    <div className="container">
      <div className="divider mt-5"><span></span><span>EIP 712</span><span></span></div>
      <div className="mt-5">
        <form className="">
          <div className="mb-3 form-group mt-4">
            
          </div>
        </form>
      </div>
      <br/>
      <br/>
      
    </div>
  )
}

export default Dashboard