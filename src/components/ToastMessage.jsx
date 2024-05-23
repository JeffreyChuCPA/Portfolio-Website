import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastMessage = ({message}) => {
  const [show, setShow] = useState(false);

  let messageColor = ''
  switch (message) {
    case 'Message sent successfully': messageColor = 'green';
      break;
    case 'Something went wrong, Please try again later.': messageColor = 'red';
      break;
    default: 
      messageColor = "gray"
  }

  useEffect(() => {
    if (message) {
      setShow(true)
    }
  }, [message])

  return (
    <ToastContainer className="p-3"  style={{ zIndex: 1, position: 'absolute', top: '90%', right: '0%'}}>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{backgroundColor: messageColor, borderRadius: '10px'}}>
        <Toast.Body >{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}