import React from 'react';
import bannerBg from "../../src/assets/circle-pattern-bg.jpg"

const Contact = () => {
    const handleForm = (event) => {
        event.preventDefault();
    }
    return (
        <div className='' style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='py-16 container mx-auto'>
                <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>
                    <div className='col-span-6'><iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116824.88789850591!2d90.30857215928211!3d23.790927481448563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sitalian%20restaurant%20itali!5e0!3m2!1sen!2sbd!4v1683202161608!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                    <div className='col-span-6 h-full'>
                        <div>
                            <h2 className='text-3xl font-semibold'>Contact Us</h2>
                            <p className='my-2 text-xl'><i>We are Here to Assist You</i></p>
                            <form onSubmit={handleForm} >
                                <div className="form-control mt-2">
                                    <input type="email" name='email' placeholder="Please Enter Your Email" required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-2">
                                    <input type="password" name='password' placeholder="Please Enter Your Email Password" required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-2">
                                    <input type="tel" name='tel' placeholder="Please Enter Your Email Phone No." required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-2">
                                    <textarea className='pl-[15px] pt-[10px] rounded-lg' name="j" id="" cols="5" rows="5" placeholder='Your Message'></textarea>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-primary">Get a Call Back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;