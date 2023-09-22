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
    const meshRef2 = useRef()
    const meshRef3 = useRef()
    const meshRef4 = useRef()
    useEffect(() => {
        configTexture(meshRef1);
        configTexture(meshRef2);
        configTexture(meshRef3);
        configTexture(meshRef4);
    }, [])


    return (

        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Object004.geometry} position={[0.019, 0.384, -0.043]}  >
                <meshStandardMaterial envMapIntensity={0.06} ref={meshRef1} {...texture1} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Object005.geometry} position={[0.006, 0.24, -0.028]}  >
                <meshStandardMaterial envMapIntensity={0.06} ref={meshRef2} {...texture1} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Object006.geometry} position={[-0.005, 0.399, -0.015]}  >
                <meshStandardMaterial envMapIntensity={0.06} ref={meshRef3} {...texture1} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes['5327684__240221P001'].geometry} position={[0.007, 0.036, -0.068]}  >
                <meshStandardMaterial envMapIntensity={0.06} ref={meshRef4} {...texture1} />
            </mesh>
        </group>

    )
}

export default Cobra2
