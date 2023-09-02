import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fetchCars } from '@utils';
import Image from 'next/image';

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      < Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className="text-4x1 font-extrabold "> Car Catalogue</h1>
          <p> Explore cars you might like.</p>
        </div>
        <div className="home__filters">
          < SearchBar />
          <div className="home__filter-container">
            < CustomFilter title='fuel' />
            < CustomFilter title='year' />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (< CarCard car={car} />))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className='text-black text-x1 font-bold'> Ooops! No results.</h2>
            <p> {allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
