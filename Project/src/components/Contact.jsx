import React,{useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,      
      delay: 200,       
      duration: 1000,   
      easing: 'ease',   
      once: true,       
      mirror: false, 
      });
  },[])
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Extracting Form Values
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    // Validate Form Inputs
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Add required access key for Web3Forms
    formData.append("access_key", "049d1a0e-45c3-43c7-883f-6e1f7eb2120a");

    // Notify user of submission process
    toast.info("Sending your message...");

    try {
      // Make the API request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Form submitted successfully!");
        event.target.reset(); // Reset form after successful submission
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen"
    >
      <form
        noValidate
        className="container w-full max-w-lg p-8 space-y-6 bg-opacity-90 bg-gradient-to-br from-purple-800 via-indigo-900  backdrop-blur-md rounded-xl shadow-2xl text-white"
        onSubmit={onSubmit}
        method="POST"
        data-AOS="zoom-in"
      >
        <h2 className="text-4xl font-extrabold text-center text-white tracking-wide font-serif"data-AOS="fade-left">
          Contact Us
        </h2>
        <div>
          <label htmlFor="name" className="block mb-2 text-lg font-semibold" data-AOS="fade-left">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="block w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 bg-white text-black placeholder-gray-400"
            data-AOS="fade-right"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-lg font-semibold"data-AOS="fade-left">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            className="block w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 bg-white text-black placeholder-gray-400"
            data-AOS="fade-right"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-lg font-semibold"data-AOS="fade-left">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            className="block w-full p-3 h-32 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 bg-white text-black placeholder-gray-400"
            data-AOS="fade-right"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold tracking-wide text-white transition-all duration-300 ease-in-out transform rounded-md shadow-lg bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:scale-105 hover:from-purple-600 hover:to-indigo-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;
