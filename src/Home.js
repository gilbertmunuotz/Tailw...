/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Pilau from "./Images/Spicy-cooked-rice.jpg";

function Home() {
    return (
        <div className='Home'>
            <div className='body font-serif:Georgia bg-slate-200'>
                <div className=''>
                    <nav className='flex'>
                        <div className="mr-6">
                            <h1 className='font-bold uppercase ml-4 border-b-2 border-gray-500 md:text-2xl lg:text-2xl xl:text-2xl'>
                                <a href="/">Food Ninja</a>
                            </h1>
                        </div>
                        <ul className='flex space-x-4 justify-self-end ml-96 font-bold xl:ml-50'>
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
                    <div className='flex lg:justify-end text-orange-400 mr-8 space-x-2 md:justify-end 2xl:justify-right'>
                        <a href="#" className='border-orange-500 border-2 rounded-full px-2 cursor-pointer'>Log in</a>
                        <a href="#" className='border-orange-500 border-2 rounded-full px-2 cursor-pointer'>Sign up</a>
                    </div>

                    <header>
                        <h2 className='text-4xl font-bold py-4'>Recipes</h2>
                        <h3>For Ninjas</h3>
                    </header>

                    <div className=''>
                        <h4 className='border-b-2 border-gray-900 font-bold'>Latest Recipes</h4>

                        <div className='my-4 grid grid-cols-3 gap-6'>
                            {/* cards go here  */}
                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>

                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>

                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>

                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>

                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                                <img src={Pilau} alt="Pilau" className='w-full' />
                                <div className='ml-2'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block'>Recipe by Mario</span>
                                </div>
                                <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25 Mins</div>
                            </div>

                            <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
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
                        <div className='button tracking-wider'>Load more</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home