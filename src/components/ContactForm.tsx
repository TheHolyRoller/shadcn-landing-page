import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="flex items-center justify-center px-6 py-12 min-h-screen" style={{backgroundColor: '#191817'}}>
      <div className="w-full max-w-[500px] p-8 rounded-2xl border" style={{backgroundColor: '#191817', borderColor: '#2a2827'}}>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-emerald-400">Get In</span>
          <span className="text-white"> Touch</span>
        </h2>
        <p className="text-gray-400 text-sm mb-8">Fill out the form below and we'll get back to you soon</p>
        
        <div>
          {/* Full Name Input */}
          <div className="mb-5">
            <label htmlFor="fullname" className="mb-2 block text-sm text-gray-300">Full Name</label>
            <input 
              type="text" 
              name="fullname" 
              id="fullname" 
              placeholder="Jane Cooper" 
              value={formData.fullname}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-base text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all" 
              style={{backgroundColor: '#222120', borderColor: '#3a3837'}}
            />
          </div>
    
          {/* Email Input */}
          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-sm text-gray-300">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="jane@example.com" 
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-base text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all" 
              style={{backgroundColor: '#222120', borderColor: '#3a3837'}}
            />
          </div>
    
          {/* Message Textarea */}
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm text-gray-300">Message</label>
            <textarea 
              rows={6} 
              name="message" 
              id="message" 
              placeholder="Type your message here..." 
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-base text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all resize-none"
              style={{backgroundColor: '#222120', borderColor: '#3a3837'}}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            className="w-full rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 active:scale-[0.98]"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}