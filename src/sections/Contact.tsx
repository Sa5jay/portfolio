
import ScrollFloat from "@/components/ScrollFloat";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
      <section
        id="contact"
        className="min-h-screen text-center text-white "
      >
        <div>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            CONTACT
          </ScrollFloat>

          <p className="text-gray-300 text-lg mt-4 mb-5">
            Have a question or want to work together? I'd love to hear from you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl"
          >
            {/* Name Field */}
            <div className="mb-6 text-left">
              <label className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-fuchsia-400 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6 text-left">
              <label className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-fuchsia-400 transition-colors"
              />
            </div>

            

            {/* Message Field */}
            <div className="mb-8 text-left">
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-fuchsia-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

          
        </div>
      </section>
  );
};

export default Contact;