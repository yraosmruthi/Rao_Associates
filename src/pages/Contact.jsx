import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast,Bounce } from "react-toastify";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Set current date/time before sending
    e.target.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_308zera",     // 🔁 Replace with your EmailJS service ID
        "template_9b4m4th",    // 🔁 Replace with your EmailJS template ID
        e.target,
        "ERNMbPo_TSQE_sIIr"      // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error);
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="h-screen w-screen fixed inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')" 
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="backdrop-blur-md bg-white/10 p-10 mt-8 rounded-xl max-w-lg w-[90%] text-white shadow-xl"
        >
          <h1 className="text-3xl font-extrabold tracking-wide mb-4 text-center drop-shadow-md">Contact Us</h1>
          <p className="mb-6 text-center">We'd love to hear from you.</p>
          
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            {/* Hidden field to store the current time */}
            <input type="hidden" name="time" />
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
