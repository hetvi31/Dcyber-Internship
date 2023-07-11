// import React from 'react'
// import LeftImage from '../components/assests/contactus.png'
// import '../styles/Contact.css'

// function Contact() {
//   return (
//     <div className='contact'>
//       <h1>Contact Us</h1>
//       <div className='left'>
//       <img src={LeftImage} alt='left' />
//       </div>
//       <div className='right'>
        
//         <form id='contact-form' method='POST'>
//           <label htmlFor='fname'>First name</label>
//           <input name='fname' placeholder='Enter First Name...' type='text'/>
//           <label htmlFor='lname'>Last name</label>
//           <input name='lname' placeholder='Enter Last Name...' type='text'/>
//           <label htmlFor='email'>Email I'd</label>
//           <input name='email' placeholder='Enter Email Id...' type='email'/>
//           <label htmlFor='message'>Subject</label>
//           <textarea rows='6' placeholder='Enter Subject...' name='message'> </textarea>
//           <button type='submit'>Submit</button>

//         </form>
//       </div>
//       contact
//     </div>
//   )
// }

// export default Contact

import React from 'react'
import LeftImage from '../components/assests/contactus.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div id='contact' className='contact'>
      <h1>Contact Us</h1>
      <div className='left'>
      <img src={LeftImage} alt='left' />
      </div>
      <div className='right'>
        
        <form id='contact-form' method='POST'>
          <label htmlFor='fname'>First name</label>
          <input name='fname' placeholder='Enter First Name...' type='text'/>
          <label htmlFor='lname'>Last name</label>
          <input name='lname' placeholder='Enter Last Name...' type='text'/>
          <label htmlFor='email'>Email I'd</label>
          <input name='email' placeholder='Enter Email Id...' type='email'/>
          <label htmlFor='message'>Subject</label>
          <textarea rows='6'placeholder='Enter Subject...' name='message'> </textarea>
          <button type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
