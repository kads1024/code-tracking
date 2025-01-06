import clsx from 'clsx'
import React from 'react'


const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
        {children}
    </div> 
}

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>
                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-2xl text-left w-full capitalize'>
                        Wizard of Enchantment
                    </h2>
                    <p className='font-light'>
                    I have been improving my game development skills for the past 7 years. I have been developing an array of credentials to support this statement. Complementing my diverse skill set, I have developed an excellent understanding of the Unity Engine, C#, Entity-Component System and other aspects of Game Development and have demonstrated this capability throughout my Game Development journey at De La Salle College of Saint Benilde. I have learned many things from creating a basic flowchart, programming in C++, C#, and Basic Javascript to basic Shader Programming, Optimizing code and making clean, readable and loosely coupled code. 
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        7+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        7+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails