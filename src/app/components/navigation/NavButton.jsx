import Link from 'next/link'
import React from 'react'

const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div
            className='absolute cursor-pointer z-50'
            style={
                {
                    transform: `translate(${x}, ${y})`
                }
            }>
            <Link 
            href={link}
            target={newTab ? '_blank' : '_self'}
            className='text-foreground rounded-full flex items-center justify-center' 
            aria-label={label}
            name={label}>
                <span>
                    {icon}
                </span>
            </Link>
        </div>
    )
}

export default NavButton