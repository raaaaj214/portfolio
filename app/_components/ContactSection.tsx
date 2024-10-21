"use client"
import React from 'react'
import toast from 'react-hot-toast';
import { submitHandler } from '@/lib/actions';


const ContactSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  "use client"
  const handleSubmit = () => {
    setLoading(true);
    submitHandler({ name, email, subject, message }).then(() => {
      toast.success('Message sent successfully');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }).catch((error) => {
      toast.error(error);
    }).finally(() => {
      setLoading(false);
    })
  }
  return (
    <div id='contact-me' className='h-full flex flex-col justify-start items-center lg:flex-row min-h-screen bg-primary  w-full gap-12 py-24 lg:px-16 px-4'>
      <div className='h-full flex flex-col gap-6 justify-center items-center lg:w-1/2 md:pb-12'>
        <h1  className='text-center text-4xl md:text-4xl lg:text-6xl w-3/5 text-text font-bold'>CONTACT</h1>
        <p className='text-center text-base/7 lg:text-xl text-text'>I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.</p>
      </div>
      <div className='flex flex-col gap-12 justify-center items-center w-full md:w-3/4 lg:w-1/2 shadow-black rounded-md shadow-2xl h-full py-9'>
        <h1 className='text-center text-xl md:text-4xl lg:text-4xl w-3/5 text-text font-bold'>CONTACT FORM</h1>
        <form action={handleSubmit} className='flex flex-col w-full justify-center items-center gap-12'>
            <input type="text" required name='name' className='bg-primary outline-none w-4/5  border-accent/25 border-b-2 text-base text-text2 ' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" required name='email' className='bg-primary outline-none w-4/5  border-accent/25 border-b-2 text-base text-text2 ' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" required name='subject' className='bg-primary outline-none w-4/5  border-accent/25 border-b-2 text-base text-text2 ' placeholder='Your Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
            <textarea name='message' required className='bg-primary outline-none w-4/5  border-accent/25 border-b-2 text-base text-text2 ' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className='disabled:cursor-not-allowed disabled:bg-gray-950  shadow-black/50 rounded-md  text-lg shadow-xl px-6 py-3 text-accent bg-primary hover:bg-sceondary' disabled={loading}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection