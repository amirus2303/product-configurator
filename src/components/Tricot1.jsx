import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import configTexture from '../utils/configtexture';
import { DoubleSide } from 'three';

const Tricot1 = (props) => {
    const { nodes } = useGLTF('./tricot_01/tricot_01.glb')

    const texture1 = useTexture({
        map: './tricot_01/textures/diffuse1.jpg',
        normalMap: './tricot_01/textures/normal1.jpg',
        roughnessMap: './tricot_01/textures/roughness1.jpg',
        metalnessMap: './tricot_01/textures/metalness1.jpg',
    })


    const meshRef1 = useRef()
    useEffect(() => {
        configTexture(meshRef1);
    }, [])


    return (
        <group {...props} dispose={null}>
            <mesh castShadow geometry={nodes.Pattern2D_21356.geometry} position={[0, 0.333, -0.045]} >
                <meshStandardMaterial ref={meshRef1} {...texture1} side={DoubleSide} />
            </mesh>
            <Environment>
                <Lightformer intensity={10} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={50} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
            </Environment>
        </group>
    )
}

export default Tricot1
