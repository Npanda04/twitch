import React from 'react'
import { Navbar } from './_components/navbar';


const BrowserLayout = ({
    children

}: {
    children: React.ReactNode;
}) => {
    return (


        <>
        <Navbar/>

            <div className='h-full flex pt-20'>
                {children}
            </div>


        </>

    )
}

export default BrowserLayout