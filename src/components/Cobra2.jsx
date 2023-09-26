import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import configTexture from '../utils/configtexture';

const Cobra2 = (props) => {
    const { nodes } = useGLTF('./cobra_02/cobra_02.glb')
    const texture1 = useTexture({
        map: './cobra_02/textures/diffuse1.jpg',
        normalMap: './cobra_02/textures/normal1.jpg',
        roughnessMap: './cobra_02/textures/roughness1.jpg',
        metalnessMap: './cobra_02/textures/metalness1.jpg',
    })

    const meshRef1 = useRef()

    useEffect(() => {
        configTexture(meshRef1);
    }, [])


    return (
        <>
            <group {...props} dispose={null}>
                <mesh castShadow geometry={nodes.New_object.geometry} position={[0, 39.293, 0]} rotation={[Math.PI / 2, 0, 0]} >
                    <meshStandardMaterial ref={meshRef1} {...texture1} />
                </mesh>
                <Environment background>
                    <Lightformer intensity={20} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                    <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                    <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
                </Environment>
            </group>
        </>
    )
}

export default Cobra2
