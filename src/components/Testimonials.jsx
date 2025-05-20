import { useEffect, useState } from "react";

const Testimonials = () => {
    const [testimonial,setTestimonial] = useState([])

    useEffect(()=>{
        fetch('testimonial.json')
        .then(res=>res.json())
        .then(data=>setTestimonial(data))
    },[])

   

  return (
    <section className="flex justify-center items-center bg-gray-100 min-h-screen testimonials">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold text-3xl text-center">What Our Users Say</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto w-10/12">
          {testimonial.map(testimonial => (
            <div key={testimonial.id} className="shadow-lg card compact">
              <div className="card-body">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-16 h-16" />
                  <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                </div>
                <p className="italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
