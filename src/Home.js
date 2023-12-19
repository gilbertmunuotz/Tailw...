import React from 'react'
import Pilau from "./Images/Spicy-cooked-rice.jpg";

function Home() {
    return (
        <div className='Home'>
            <div className='body font-serif:Georgia bg-slate-500'>
                <div className=''>
                    <nav>
                        <div className="mr-6">
                            <h1 className='font-bold uppercase ml-4 border-b-2 border-gray-500'>
                                <a href="/">Food Ninja</a>
                            </h1>
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className='mx-6'>
                    <div className='flex sm:justify-center lg:justify-end text-orange-400 mr-8 space-x-2'>
                        <a href="#">Log in</a>
                        <a href="#">Sign up</a>
                    </div>

                    <header>
                        <h2 className='text-4xl font-bold py-4'>Recipes</h2>
                        <h3>For Ninjas</h3>
                    </header>

                    <div className=''>
                        <h4 className='border-b-2 border-gray-900 font-bold'>Latest Recipes</h4>

                        <div className='my-4'>
                            {/* cards go here  */}
                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>
                        </div>

                        <h4>Most Popular</h4>

                        <div>
                            {/* cards go here  */}
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div>Load more</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home