// // src/pages/Contact.jsx
// import axios from "axios";
// import React from "react";
// import { useState } from "react";

// const Contact = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:3000/api/contact', {
//                 name,
//                 email,
//                 message

//             }, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             alert("Submitting")
//         }
//         catch (error) {
//             console.log(error)
//             alert("Error in submitting")
//         }
//     }
//     return (
//         <div className="bg-white text-gray-800 p-6">

//             <section className="max-w-4xl mx-auto text-center mb-12">
//                 <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
//                 <p className="text-gray-700 mb-8">
//                     Have a question or want to book an appointment? Reach out to us.
//                 </p>

//                 <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
//                     <input type="text" placeholder="Your Name" className="p-3 border rounded" value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                     <input type="email" placeholder="Your Email" className="p-3 border rounded" value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                     <textarea placeholder="Your Message" className="p-3 border rounded" rows="4" value={message}
//                         onChange={(e) => setMessage(e.target.value)}></textarea>
//                     <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900">Send</button>
//                 </form>
//             </section>

//             {/* Google Map */}
//             <section className="max-w-4xl mx-auto mt-12">
//                 <h2 className="text-xl font-semibold text-blue-900 mb-4">Find Us</h2>
//                 <iframe
//                     title="Hospital Location"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609773272!2d72.74109984697272!3d19.082197839278314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b60d1b9b64ff%3A0x9db8f1e08e2eac0!2sMumbai!5e0!3m2!1sen!2sin!4v1613123917645!5m2!1sen!2sin"
//                     width="100%"
//                     height="300"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                 ></iframe>
//             </section>
//         </div>
//     );
// };

// export default Contact;