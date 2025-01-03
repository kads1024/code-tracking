"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({ children, className }) => {
    return (
        // Canvas is a wrapper for the 3D scene
        <Canvas
            // clsx is a utility for conditionally joining class names together
            className={clsx("w-screen h-screen -z-10 relative", className)}
        >
            {/* Suspense is a wrapper for the 3D model */}
            <Suspense fallback={null}>
                {children}
            </Suspense>

            {/* Environment is a wrapper for the lighting */}
            <Environment preset="dawn" />
        </Canvas>
    )
}

// Export the component
export default RenderModel