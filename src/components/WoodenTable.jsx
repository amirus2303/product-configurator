import { useGLTF, useTexture } from '@react-three/drei'
import { useGlobalContext } from '../context'
import { useEffect, useRef, useState } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';
import LevaComponent from './LevaComponent';

const WoodenTable = (props) => {
    const materialRef = useRef()
    const { nodes } = useGLTF('./wooden_table/scene.gltf')
    const { table2Texture } = useGlobalContext()

    const texture1 = useTexture({
        map: './wooden_table/wood_024_sd/map.jpg',
        displacementMap: './wooden_table/wood_024_sd/height.jpg',
        normalMap: './wooden_table/wood_024_sd/normal.jpg',
        roughnessMap: './wooden_table/wood_024_sd/roughness.jpg',
        aoMap: './wooden_table/wood_024_sd/aoMap.jpg',
    })

    const texture2 = useTexture({
        map: './wooden_table/wood_022_sd/map.jpg',
        displacementMap: './wooden_table/wood_022_sd/height.png',
        normalMap: './wooden_table/wood_022_sd/normal.jpg',
        roughnessMap: './wooden_table/wood_022_sd/roughness.jpg',
        aoMap: './wooden_table/wood_022_sd/aoMap.jpg',
    })
    const texture3 = useTexture({
        map: './wooden_table/wood_025_sd/map.jpg',
        displacementMap: './wooden_table/wood_025_sd/height.png',
        normalMap: './wooden_table/wood_025_sd/normal.jpg',
        roughnessMap: './wooden_table/wood_025_sd/roughness.jpg',
        aoMap: './wooden_table/wood_025_sd/aoMap.jpg',
    })
    const [texture, setTexture] = useState(texture1)
    useEffect(() => {
        materialRef.current.map.colorSpace = SRGBColorSpace; // Set the map to sRGB
        materialRef.current.map.flipY = false;
        materialRef.current.map.needsUpdate = true;

        materialRef.current.displacementMap.colorSpace = LinearSRGBColorSpace;
        materialRef.current.displacementMap.flipY = false;
        materialRef.current.displacementMap.needsUpdate = false;

        materialRef.current.normalMap.colorSpace = LinearSRGBColorSpace;
        materialRef.current.normalMap.flipY = false;
        materialRef.current.normalMap.needsUpdate = true;

        materialRef.current.roughnessMap.colorSpace = LinearSRGBColorSpace;
        materialRef.current.roughnessMap.flipY = false;
        materialRef.current.roughnessMap.needsUpdate = true;

        materialRef.current.aoMap.colorSpace = LinearSRGBColorSpace;
        materialRef.current.aoMap.flipY = false;
        materialRef.current.aoMap.needsUpdate = true;

        materialRef.current.needsUpdate = true;
    }, [table2Texture, texture])


    useEffect(() => {
        if (table2Texture === 'texture1') {
            setTexture(texture1)
        }
        if (table2Texture === 'texture2') {
            setTexture(texture2)
        }
        if (table2Texture === 'texture3') {
            setTexture(texture3)
        }

    }, [table2Texture])
    const { envMapIntensity } = LevaComponent()

    return (
        <group {...props} dispose={null} position={[0, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.036}>
                <mesh castShadow geometry={nodes.defaultMaterial.geometry} rotation={[Math.PI / 2, Math.PI * .25, 0]} >
                    <meshStandardMaterial envMapIntensity={envMapIntensity} ref={materialRef} key={table2Texture} {...texture} />
                </mesh>
            </group>
        </group>
    )
}
export default WoodenTable;
//useGLTF.preload('./wooden_table/scene.gltf')
