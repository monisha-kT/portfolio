// import React, { useEffect } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   useEffect(() => {
//     emailjs.init('Cy8twHYwnFfmeaUwX'); // Replace with your EmailJS User ID
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email').required('Required'),
//       message: Yup.string().required('Required'),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       const templateParams = {
//         name: values.name,
//         email: values.email,
//         message: values.message,
//         subject: 'Hire Me Inquiry',
//       };

//       emailjs
//         .send(
//           'service_nnd3ucf', // Replace with your EmailJS Service ID
//           'template_wmd1bff', // Replace with your EmailJS Template ID
//           templateParams
//         )
//         .then(
//           (response) => {
//             console.log('Email sent successfully!', response.status, response.text);
//             alert('Thank you for your interest! Your message has been sent.');
//             resetForm();
//           },
//           (error) => {
//             console.error('Failed to send email:', error);
//             alert('There was an error sending your message. Please try again later.');
//           }
//         );
//     },
//   });

//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2>Hire Me</h2>
//         <p>If you're interested in working with me, please fill out the form below.</p>
//         <form onSubmit={formik.handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//           />
//           {formik.errors.name && <p className="error">{formik.errors.name}</p>}
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email && <p className="error">{formik.errors.email}</p>}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             onChange={formik.handleChange}
//             value={formik.values.message}
//           />
//           {formik.errors.message && <p className="error">{formik.errors.message}</p>}
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      fetch('https://formspree.io/f/xldjpnbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then(async (response) => {
          const data = await response.json();
          console.log('Formspree Response:', data);

          if (response.ok) {
            setDialogMessage('✅ Thank you! Your message has been sent.');
            resetForm();
          } else {
            setDialogMessage(`❌ Error: ${data.error || 'Failed to send message'}`);
          }
          setOpen(true);
          console.log("Dialog Open State:", open); // Debugging dialog state
        })
        .catch((error) => {
          console.error('Error:', error);
          setDialogMessage('❌ There was an error sending your message. Please try again later.');
          setOpen(true);
        });
    },
  });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Hire Me</h2>
        <p>If you're interested in working with me, please fill out the form below.</p>
        
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <p className="error">{formik.errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <p className="error">{formik.errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message && <p className="error">{formik.errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>

        {/* ✅ Dialog Box for Feedback */}
        <Dialog key={open} open={open} onClose={handleClose}>
          <DialogTitle>Notification</DialogTitle>
          <DialogContent>
            <p>{dialogMessage}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default Contact;
