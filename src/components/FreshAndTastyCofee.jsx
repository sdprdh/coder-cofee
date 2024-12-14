import cofee1 from '../assets/coffee/coffee1.png';
import cofee2 from '../assets/coffee/coffee3.png';

export const FreshAndTastyCofee = () => {
    return (
        <section className='w-full md:min-h-screen p-4'>
            <div className='md:max-w-[680px] mx-auto text-center mt-12 space-y-2'>
                <h2 className='text-3xl font-bold text-lightGray'>
                    Fresh and
                    <span className='text-primary'> Tasty cofee</span>
                </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus, distinctio
                    cum eaque totam voluptatem ex dolorem fuga.</p>
            </div>

            <div className='mt-8'>
                <ul className='w-full flex flex-col md:flex-row items-center justify-center'>
                    <li>
                        <figure className='flex flex-col justify-center items-center p-4'>
                            <img src={cofee1} alt="cofe1" className='img-shadow2 max-w-[200px] hover:scale-110 duration-300 cursor-pointer'/>
                            <figcaption className='text-center space-y-2 mt-4'>
                                <h3 className="text-2xl font-bold text-primary">Black Cofee</h3>
                                <p className="text-darkGray">
                                    lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.
                                </p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure className='flex flex-col justify-center items-center p-4'>
                            <img src={cofee2} alt="cofe1" className='img-shadow2 max-w-[200px] hover:scale-110 duration-300 cursor-pointer'/>
                            <figcaption className='text-center space-y-2 mt-4'>
                                <h3 className="text-2xl font-bold text-primary">Hot Cofee</h3>
                                <p className="text-darkGray">
                                    lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.
                                </p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure className='flex flex-col justify-center items-center p-4'>
                            <img src={cofee1} alt="cofe1" className='img-shadow2 max-w-[200px] hover:scale-110 duration-300 cursor-pointer'/>
                            <figcaption className='text-center space-y-2 mt-4'>
                                <h3 className="text-2xl font-bold text-primary">Cold Cofee</h3>
                                <p className="text-darkGray">
                                    lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.
                                </p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    )
}
