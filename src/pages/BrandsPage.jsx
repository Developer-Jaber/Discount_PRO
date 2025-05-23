import { useLoaderData } from "react-router-dom"
import BrandCard from "../components/BrandCard";

const BrandsPage = () => {
    const data = useLoaderData();
  return (
    <section>
      <nav className='flex justify-between items-center mx-auto py-5 w-9/12'>
        <h1 className="font-semibold text-3xl">All Brands</h1>
        <div>
          <input
            type='text'
            placeholder='Search brands...'
            // value={searchTerm}
            // onChange={e => setSearchTerm(e.target.value)}
            className='mb-6 p-2 border border-gray-400 rounded w-full'
          />
        </div>
      </nav>
      <section>
        {
           data && data.map(brandCard => <BrandCard key={brandCard.id} data={brandCard}></BrandCard>)
        }
        {/* {console.log(data)} */}
      </section>
    </section>
  )
}

export default BrandsPage
