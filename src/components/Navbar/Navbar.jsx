import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto my-3 items-center h-[50px]'>
            <div className='font-bold text-2xl'>
                <h1>CS — Ticket System</h1>
            </div >


            <div className='flex gap-4' >
                <span>Home</span>
                <span>FAQ</span>
                <span>Changelog</span>
                <span>Blog</span>
                <span>Download</span>
                <span>Contact</span>

                <button className='bg-gradient-to-r from-[#4106a7] to-[#9069d9] rounded-2xl px-6 py-2 text-white'>+ New Ticket</button>


            </div>

        </div>
    );
};

export default Navbar;