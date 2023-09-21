import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

const Cobra2 = (props) => {
    const { nodes } = useGLTF('./cobra_02/cobra_02.glb')
    const texture1 = useTexture({
        map: './cobra_02/textures/diffuse1.jpg',
        normalMap: './cobra_02/textures/normal1.jpg',
        roughnessMap: './cobra_02/textures/roughness1.jpg',
        metalnessMap: './cobra_02/textures/metalness1.jpg',
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
            <mesh castShadow receiveShadow geometry={nodes.New_object.geometry}  position={[0, 39.293, 0]} rotation={[Math.PI / 2, 0, 0]} >
                <meshStandardMaterial ref={meshRef1} envMapIntensity={0.01} {...texture1} />
            </mesh>
        </group>
    )
}

export default Cobra2
