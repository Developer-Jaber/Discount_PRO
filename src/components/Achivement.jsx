import { useEffect, useState } from "react"


const Achivement = () => {

    const [achivement,setAchivement] = useState([])

    useEffect(()=>{
        fetch('achivment.json')
        .then(res=>res.json())
        .then(data=>setAchivement(data))
    },[])


  return (
    <section className='bg-white mx-auto py-12 w-10/12 achievements'>
      <div className='mx-auto px-4 container'>
        <h2 className='mb-8 font-bold text-3xl text-center'>
          Our Achievements
        </h2>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-3'>
          {achivement.map(achievement => (
            <div key={achievement.id} className='shadow-lg card compact'>
              <div className='card-body'>
                <span className='text-5xl'>{achievement.icon}</span>
                <h3 className='mt-4 font-semibold text-2xl'>
                  {achievement.title}
                </h3>
                <p className='mt-2'>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achivement
