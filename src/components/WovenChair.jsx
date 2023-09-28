
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

const WovenChair = (props) => {
    const { nodes } = useGLTF('./woven_chair/woven_chair.gltf')
    const texture1 = useTexture({
        map: './woven_chair/diffuse1.jpg',
        normalMap: './woven_chair/normal1.jpg',
        roughnessMap: './woven_chair/roughness1.jpg',
    })

    const configTexture = (ref) => {
        ref.current.map.colorSpace = SRGBColorSpace; // Set the map to sRGB
        //ref.current.map.flipY = false;
        ref.current.map.needsUpdate = true;


        ref.current.normalMap.colorSpace = LinearSRGBColorSpace;
        //ref.current.normalMap.flipY = false;
        ref.current.normalMap.needsUpdate = true;

        ref.current.roughnessMap.colorSpace = LinearSRGBColorSpace;
        //ref.current.roughnessMap.flipY = false;
        ref.current.roughnessMap.needsUpdate = true;

        ref.current.needsUpdate = true;
    }
    const meshRef1 = useRef()
    useEffect(() => {
        configTexture(meshRef1);

    }, [])
    return (
        <group {...props} dispose={null} >
            <mesh castShadow receiveShadow geometry={nodes.Aset_props__M_wjglah2s_00_LOD2.geometry} material={nodes.Aset_props__M_wjglah2s_00_LOD2.material}>
                <meshStandardMaterial ref={meshRef1}  {...texture1} />
            </mesh>
            <Environment>
                <Lightformer intensity={20} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={60} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
            </Environment>
        </group >
    )
}

export default WovenChair
