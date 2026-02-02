
import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Linkedin, Twitter, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ritesh.d.goat/', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/riteshotaku106@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10">
            Let's Start<br/>Something <span className="text-violet italic">Big</span>
          </h2>
          <p className="text-xl text-dark/60 leading-relaxed mb-12 max-w-md">
            I'm currently available for freelance work and full-time positions. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>

          <div className="space-y-6">
            <a href="mailto:riteshotaku106@gmail.com" className="flex items-center space-x-6 p-6 rounded-3xl bg-light border border-dark/5 hover:border-violet transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Mail className="text-violet" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-dark/40 uppercase tracking-widest">Email Me</div>
                <div className="text-xl font-bold">riteshotaku106@gmail.com</div>
              </div>
              <ArrowUpRight className="ml-auto text-dark/20 group-hover:text-violet transition-colors" />
            </a>

            <a href="https://wa.me/919667971548" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 rounded-3xl bg-light border border-dark/5 hover:border-cyan transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <MessageCircle className="text-cyan" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-dark/40 uppercase tracking-widest">WhatsApp</div>
                <div className="text-xl font-bold">+91 96679 71548</div>
              </div>
              <ArrowUpRight className="ml-auto text-dark/20 group-hover:text-cyan transition-colors" />
            </a>
          </div>

          <div className="mt-12 flex space-x-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target={social.href !== '#' ? "_blank" : undefined}
                rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center hover:bg-violet transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-light p-10 md:p-14 rounded-[3rem] border border-dark/5 relative overflow-hidden">
          {formStatus === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in py-12">
              <div className="w-24 h-24 bg-violet/10 text-violet rounded-full flex items-center justify-center">
                <CheckCircle2 size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-2">Message Sent!</h3>
                <p className="text-dark/60">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-violet font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-dark/40 ml-1">Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-dark focus:ring-2 focus:ring-violet outline-none transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-dark/40 ml-1">Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-dark focus:ring-2 focus:ring-violet outline-none transition-shadow"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-dark/40 ml-1">Project Brief</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 text-dark focus:ring-2 focus:ring-violet outline-none transition-shadow resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-5 bg-dark text-white font-bold rounded-2xl hover:bg-violet transition-colors text-lg shadow-xl shadow-dark/10 flex items-center justify-center space-x-3 disabled:opacity-70"
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              {formStatus === 'error' && (
                <p className="text-red-500 text-center text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
