import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'
type Props = {}
type Inputs = {
    name: string,
    email: string,
    message: string,
    subject: string
}

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => { 
        window.location.href = `mailto:bhushan.mani72@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    };
  return (
      <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>
              ContactMe
          </h3>
          <div className='flex flex-col space-y-10 top-40 absolute'>
              <h4 className='text-4xl font-semibold text-center'>
                  I have got what you need. {" "}
                    <span className='underline decoration-[#F7AB0A]/40'>Lets talk</span>  
              </h4>
              <div className='space-y-10'>
                  <div className='flex items-center space-x-5 justify-center'>
                      <PhoneIcon className='text-[#FCAB0A]/40 h-7 w-7 animate-pulse'/>
                      <p className='text-2xl'>+12345677</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <EnvelopeIcon className='text-[#FCAB0A]/40 h-7 w-7 animate-pulse'/>
                      <p className='text-2xl'>bhushan.mani72@gmail.com</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <MapPinIcon className='text-[#FCAB0A]/40 h-7 w-7 animate-pulse'/>
                      <p className='text-2xl'>123 develop lane</p>
                  </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                  <div className='flex space-x-2'>
                      <input  {...register('name')} placeholder='Name' type="text" className="contactInput" />
                      <input {...register('email')} placeholder='Email' type="email" className="contactInput" />
                  </div>
                  <input {...register('subject')}placeholder='Subject' type="text" className="contactInput" />
                  <textarea {...register('message')} placeholder='Message' className="contactInput"></textarea>
                  <button type='submit' className='bg-[#FCAB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
              </form>
        </div>
      </div>
  )
}

export default ContactMe