import { useGLTF } from '@react-three/drei'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import * as THREE from 'three'

const Table = (props) => {
    const { nodes, materials } = useGLTF('./table/Table.gltf')
    const { legs, legsColor } = useGlobalContext()
    useEffect(()=>{
        materials.Metal.color = new THREE.Color(legsColor)
    },[legsColor])
    
    return (
        <group {...props} dispose={null}>
            <mesh castShadow geometry={nodes.Plate.geometry} material={materials.Plate} >
                </mesh>
            {legs === 0 &&
                <mesh castShadow geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />}
            {legs === 0 &&
                <mesh castShadow geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />}
            {legs === 1 &&
                <mesh castShadow geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />}
            {legs === 1 &&
                <mesh castShadow geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />}
            {legs === 2 &&
                <mesh castShadow geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />}
            {legs === 2 &&
                <mesh castShadow geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />}
        </group>
    )
}
export default Table;
useGLTF.preload('./table/Table.gltf')
