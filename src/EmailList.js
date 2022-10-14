
import Email from "./Email";

function EmailList(props) {
  return (
    // array of emails
    <>
      {
        props.emails.map( 
          function(email) {
            return (
              <Email 
                email={email}
                getOneEmail={props.getOneEmail}  

                key={email.id}
                // setCurrentEmail={props.setCurrentEmail}
              /> 
            )
          }
        )
      }

    </>
  )



}

export default EmailList;