import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace, DoubleSide } from 'three';

const Tricot1 = (props) => {
    const { nodes } = useGLTF('./tricot_01/tricot_01.glb')

    const texture1 = useTexture({
        map: './tricot_01/textures/diffuse1.jpg',
        normalMap: './tricot_01/textures/normal1.jpg',
        roughnessMap: './tricot_01/textures/roughness1.jpg',
        metalnessMap: './tricot_01/textures/metalness1.jpg',
    })

    const configTexture = (ref) => {
        ref.current.map.colorSpace = SRGBColorSpace; // Set the map to sRGB
        ref.current.map.flipY = false;
        ref.current.map.needsUpdate = true;

        ref.current.normalMap.colorSpace = LinearSRGBColorSpace;
        ref.current.normalMap.flipY = false;
        ref.current.normalMap.needsUpdate = true;

        ref.current.roughnessMap.colorSpace = LinearSRGBColorSpace;
        ref.current.roughnessMap.flipY = false;
        ref.current.roughnessMap.needsUpdate = true;

        ref.current.metalnessMap.colorSpace = LinearSRGBColorSpace;
        ref.current.metalnessMap.flipY = false;
        ref.current.metalnessMap.needsUpdate = true;

        ref.current.needsUpdate = true;
    }

    const meshRef1 = useRef()
    useEffect(() => {
        configTexture(meshRef1);
    }, [])


    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Pattern2D_44509.geometry} material={nodes.Pattern2D_44509.material} position={[0, 0.349, -0.043]} >
            <meshStandardMaterial ref={meshRef1} {...texture1} side={DoubleSide} />
            </mesh>
            <Environment background>
                <Lightformer intensity={10} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={50} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
            </Environment>
        </group>
    )
}

export default Tricot1