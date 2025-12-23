import ScrollFloat from "@/components/ScrollFloat";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bdcfba9b-b5c5-4d74-823c-8eafd27fbeff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("✓ Message Sent Successfully!");
      event.currentTarget.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      setResult("❌ Error sending message. Please try again.");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-center text-white"
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
          onSubmit={onSubmit}
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
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-fuchsia-400 transition-colors"
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
              placeholder="Your message here..."
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-fuchsia-400 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={result === "Sending...."}
            className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {result === "Sending...." ? "Sending..." : "Send Message"}
          </button>

          {/* Result Message */}
          {result && result !== "Sending...." && (
            <div className={`mt-4 text-center font-semibold ${
              result.includes("Successfully") ? "text-green-400" : "text-red-400"
            }`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

