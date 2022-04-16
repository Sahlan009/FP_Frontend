import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from "@chakra-ui/react"





function AbousUs() {
    const history = useHistory()

    
      const backHandler = () => {
        history.push("/chats");
      };
  return (
    <div className='navbar'>
        <Button onClick={backHandler}>Back</Button>
      </div>
  )
}

export default AbousUs
