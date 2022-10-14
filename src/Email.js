
function Email(props) {

  //this is where we render the sender + subject
  // console.log(props)
  return (
    <div>
      <p onClick={() => props.getOneEmail(props.email.id)}>
        Sender: {props.email.sender} Subject: {props.email.subject}
      </p>
    </div>
  );

}


export default Email;