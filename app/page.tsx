import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: any) {

    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        model: searchParams.model || '',
    })

    console.log(allCars.length)
    const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0


    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id='discover'>
                <div className="home__text-container">
                    <h1 className='text-4xl font-extrabold'>Car Catologue</h1>
                    <p>Explore the cars you might like</p>

                    <div className="home__filters">
                        <SearchBar />

                        <div className="home__filter-container">
                            <CustomFilter title='fuel' options={ fuels }/>
                            <CustomFilter title='year' options={ yearsOfProduction }/>
                        </div>
                    </div>

                    {
                        !isDataEmpty 
                        ?
                        (
                            <section>
                                <div className="home__cars-wrapper">
                                    {
                                        allCars?.map((car, index) => {
                                            return (
                                                <CarCard car={ car } key={ index } />
                                            )
                                        })
                                    }
                                </div>

                                <ShowMore 
                                    pageNumber={ (searchParams.limit || 10) /10  } 
                                    isNextPage={ (searchParams.limit || 10) > allCars.length }
                                />
                            </section>
                        ) 
                        :
                        (
                           <div className="home__error-container">
                                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                                <p>{ allCars?.message }</p>
                           </div> 
                        )
                    }
                </div>
            </div>
        </main>
    )
}
