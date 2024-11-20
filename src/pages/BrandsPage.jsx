import { useLoaderData } from "react-router-dom"
import BrandCard from "../components/BrandCard";

const BrandsPage = () => {
    const data = useLoaderData();
    console.log(data);
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
            className='border-gray-400 mb-6 p-2 border rounded w-full'
          />
        </div>
      </nav>
      <section>
        {
           data && data?.map(brandCard => <BrandCard key={brandCard.id} data={brandCard}></BrandCard>)
        }
      </section>
    </section>
  )
}

export default BrandsPage
