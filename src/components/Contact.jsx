import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../assets/img/contact-img.svg"

export const Contact = ({setStatus}) => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...')
    setIsSubmitDisabled(true)

    // Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/xwpeeaqb"

    // Create FormData object from form details
    const formData = new FormData();
    formData.append('name', formDetails.name);
    formData.append('email', formDetails.email);
    formData.append('message', formDetails.message);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thank you for the message!");
        setButtonText('Thanks!')
        setFormDetails(formInitialDetails); // Reset form details
      } else {
        alert("There was an error submitting your message. Please try again later.");
        setButtonText('Send')
        setIsSubmitDisabled(false)
      }
    } catch (error) {
      alert("There was an error submitting your message. Please try again later.");
      setButtonText('Send')
      setIsSubmitDisabled(false)
    }
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col  md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className='px-1'>
                  <input required type='text' name='name' value={formDetails.name} placeholder='Name' onChange={(e) => onFormUpdate('name', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input required type='email' name='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />  
                </Col>
                <Col size={12} className="px-1">
                  <textarea required rows='6' name='message' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}/>
                  <button type='submit' disabled={isSubmitDisabled}><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}