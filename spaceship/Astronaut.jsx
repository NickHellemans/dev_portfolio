import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Float } from '@react-three/drei'

// Auto-generated by: https://github.com/pmndrs/gltfjsx
const Spaceman = forwardRef(({ children, ...props }, ref) => {
  const { nodes, materials } = useGLTF('./spaceship/Astronaut-transformed.glb')
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0
    })
  })
  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      {...props}
      geometry={nodes.Astronaut_mesh.geometry}
      material={materials.Astronaut_mat}
      material-envMapIntensity={0}
      dispose={null}>
      {children}
    </mesh>
  )
})

Spaceman.displayName = "spaceman";



export default function AstronautCanvas() {
  const spaceman = useRef()
  return (
    <Canvas camera={{ position: [0, 2, 3] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <spotLight position={[5, 0, 5]} intensity={2.5} penumbra={1} angle={0.35} castShadow color="#0c8cbf" />

      <Float position={[1, 1.1, -0.5]} rotation={[Math.PI / 3.5, 0, 0]} rotationIntensity={4} floatIntensity={6} speed={1.5}>
        <Spaceman scale={0.2}>
          <object3D position={[-0.6, 2, 0]} ref={spaceman} />
        </Spaceman>
      </Float>
      <OrbitControls makeDefault />
    </Canvas>
  )
}
