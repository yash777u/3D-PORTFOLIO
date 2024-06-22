import React from "react";
import Heading from "../../HelperComp/Heading"; // Adjust the path as per your project structure

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          recipientEmail: "yogesh.kumar.02@proton.me", // Replace with your recipient email
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Email sent successfully!");
      e.target.reset(); // Reset the form fields after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="p-4 mx-auto max-w-xl bg-white font-sans">
      <div className="mt-10">
        <Heading title="Contact Us" subtitle="" />
      </div>
      <div className="pl-20 pr-20">
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white bg-orange-400 hover:bg-orange-300 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            // Replace bg-orange-500 and bg-orange-600 with your desired shades of orange from your tailwind config
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
