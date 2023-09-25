/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/tricot_01/tricot_01.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tricot_01.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Pattern2D_44509.geometry} material={nodes.Pattern2D_44509.material} position={[0, 0.349, -0.043]} />
    </group>
  )
}

useGLTF.preload('/tricot_01.glb')
