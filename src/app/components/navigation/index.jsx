"use client"
import { BtnList } from '@/app/data'

import React from 'react'

const Navigation = () => {

    // Get Angle spacing between buttons in a circle
    const angleIncrement = 360 / BtnList.length;

    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <div className='w-max flex items-center justify-between relative'>
                {
                    BtnList.map((btn, index) => {

                        const angleRad = (index * angleIncrement * Math.PI) / 180  // Iterate and calculate angle in radians
                        const radius = 'calc(20vw - 1rem)' // Calculate screen radius
                        const x = `calc(${radius} * ${Math.cos(angleRad)})` // Calculate x position based on angle
                        const y = `calc(${radius} * ${Math.sin(angleRad)})` // Calculate y position based on angle

                        return <button
                            key={index}
                            className='absolute'
                            style={
                                {
                                    transform: `translate(${x}, ${y})` // Set Button position
                                }
                            }>
                            {btn.label}
                        </button>
                    })
                }
            </div>
        </div>
    )
}

export default Navigation