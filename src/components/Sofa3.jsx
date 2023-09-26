
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import configTexture from '../utils/configtexture';


const Sofa3 = (props) => {
    const { nodes, materials } = useGLTF('./sofa_03/sofa_03_1k.gltf')

    const texture1 = useTexture({
        map: './sofa_03/texture1/diffuse1.jpg',
        normalMap: './sofa_03/texture1/normal1.jpg',
        roughnessMap: './sofa_03/texture1/roughness1.jpg',
    })


    const meshRef1 = useRef()
    const meshRef2 = useRef()


    useEffect(() => {
        configTexture(meshRef1);
        configTexture(meshRef2);

    }, [])
    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.sofa_02_Base.geometry} material={materials.sofa_02} position={[0, 0, 0.031]} >
                <meshStandardMaterial ref={meshRef1} {...texture1} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.sofa_02_Seat.geometry} material={materials.sofa_02} position={[0, 0, 0.031]} >
                <meshStandardMaterial ref={meshRef2} {...texture1} />
            </mesh>

            <Environment background>
                <Lightformer intensity={20} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={60} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
            </Environment>
        </group>
    )
}

export default Sofa3
