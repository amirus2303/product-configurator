import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import configTexture from '../utils/configtexture';

const Sofa2 = (props) => {
    const { nodes } = useGLTF('./sofa_visio/sofa_visio.glb')

    const texture1 = useTexture({
        map: './sofa_visio/diffuse1.jpg',
        normalMap: './sofa_visio/normal1.jpg',
        roughnessMap: './sofa_visio/roughness1.jpg',
        metalnessMap: './sofa_visio/metalic1.jpg',
    })
    const texture2 = useTexture({
        map: './sofa_visio/diffuse2.jpg',
        normalMap: './sofa_visio/normal2.jpg',
        roughnessMap: './sofa_visio/roughness2.jpg',
        metalnessMap: './sofa_visio/metalic2.jpg',
    })

    const meshRef1 = useRef()
    const meshRef2 = useRef()

    useEffect(() => {
        configTexture(meshRef1);
        configTexture(meshRef2);

    }, [])
    return (
        <group {...props} dispose={null}>
            <mesh castShadow geometry={nodes.part_01.geometry} material={nodes.part_01.material} position={[0.065, 0.545, -0.444]} scale={0.01} >
                <meshStandardMaterial ref={meshRef1}  {...texture1} />
            </mesh>
            <mesh castShadow geometry={nodes.part_02.geometry} material={nodes.part_02.material} position={[0.064, 0.329, -0.458]} scale={0.01} >
                <meshStandardMaterial ref={meshRef2}  {...texture2} />
            </mesh>
            <Environment>
                <Lightformer intensity={20} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={60} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
            </Environment>
        </group>
    )
}

export default Sofa2;