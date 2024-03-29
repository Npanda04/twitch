import React from 'react'
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar'; 
import { Container } from './_components/container'; 

const BrowserLayout = ({
    children

}: {
    children: React.ReactNode;
}) => {
    return (


        <>
        <Navbar/>

            <div className='h-full flex pt-20'>
                <Sidebar/>
                <Container>

              
                {children}
                </Container>
            </div>


        </>

    )
}

export default BrowserLayout