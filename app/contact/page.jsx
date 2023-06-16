import Link from 'next/link';
import Image from 'next/image';

import iconEmail from '../../public/assets/icons/icon-email.svg';
import iconPhone from '../../public/assets/icons/icon-phone.svg';
import iconLocation from '../../public/assets/icons/icon-location.svg';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen max-w-screen text-white overflow-x-hidden">
        <section className="form-section pt-40 pb-24">
            <div className="container mx-auto text-center">
                <div className="sub-text uppercase text-xl pb-8">Get in Touch</div>
                <h1 className="big-title uppercase font-medium text-8xl">Let's Talk</h1>
            </div>
        </section>
        <section className="contact-form">
            <div className="form-wrapper container mx-auto flex justify-center">
                <form action="" method="POST" className='text-center'>

                    <div className="form-group">
                        <input type="text" autoComplete="text" name="name" placeholder="Your Name" required={true} className="border border-white"/>
                    </div>

                    <div className="form-group">
                        <input type="email" autoComplete="email" name="email" placeholder="Your Email" required={true}/>
                    </div>

                    <div className="form-group">
                        <textarea name="query" id="query" cols="30" rows="10" placeholder="Enter your queries"/>
                    </div>

                    <button className="bg-white text-black uppercase font-medium mt-4 py-4 px-10">Submit</button>
                </form>
            </div>
        </section>

        <section className="contact-details py-40">
            <div className="container mx-auto flex items-center">

                <div className="contact-col flex-1">
                    <Image src={iconEmail} alt='Email Address' className='pb-4 mx-auto'/>
                    <Link href="mailto:">contact@cnflnc.com</Link>
                </div>

                <div className="contact-col flex-1">
                    <Image src={iconPhone} alt='Phone Number' className='pb-4 mx-auto'/>
                    <Link href="tel:">+91 99887 76655</Link>
                </div>

                <div className="contact-col flex-1">
                    <Image src={iconLocation} alt='Address' className='pb-4 mx-auto'/>
                    <Link href="">9979 Huel Mission, Bangalore - 489580, KN IN</Link>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Contact