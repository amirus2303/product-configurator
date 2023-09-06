import { useGLTF, useTexture } from '@react-three/drei'
import { useGlobalContext } from '../context'
import { useEffect, useRef } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

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

    const texture3 = useTexture({
        map: './wooden_table/wood_022_sd/map.jpg',
        displacementMap: './wooden_table/wood_022_sd/height.png',
        normalMap: './wooden_table/wood_022_sd/normal.jpg',
        roughnessMap: './wooden_table/wood_022_sd/roughness.jpg',
        aoMap: './wooden_table/wood_022_sd/aoMap.jpg',
    })
    const texture2 = useTexture({
        map: './wooden_table/wood_025_sd/map.jpg',
        displacementMap: './wooden_table/wood_025_sd/height.png',

        roughnessMap: './wooden_table/wood_025_sd/roughness.jpg',
        aoMap: './wooden_table/wood_025_sd/aoMap.jpg',
    })

    texture2.encoding = SRGBColorSpace; // Set the map to sRGB
    texture2.displacementMap.colorSpace = LinearSRGBColorSpace;

    texture2.roughnessMap.colorSpace = LinearSRGBColorSpace;
    texture2.aoMap.colorSpace = LinearSRGBColorSpace;

    useEffect(() => {
        texture2.encoding = SRGBColorSpace; // Set the map to sRGB
        texture2.map.flipY = false
        texture2.displacementMap.colorSpace = LinearSRGBColorSpace;
        texture2.displacementMap.flipY = false
        texture2.normalMap.colorSpace = LinearSRGBColorSpace;
        texture2.normalMap.flipY = false
        texture2.roughnessMap.colorSpace = LinearSRGBColorSpace;
        texture2.roughnessMap.flipY = false
        texture2.aoMap.colorSpace = LinearSRGBColorSpace;
        texture2.aoMap.flipY = false
    }, [])
    useEffect(() => {
        texture2.encoding = SRGBColorSpace; // Set the map to sRGB
        texture2.map.flipY = false
        texture2.displacementMap.colorSpace = LinearSRGBColorSpace;
        texture2.displacementMap.flipY = false
        texture2.normalMap.colorSpace = LinearSRGBColorSpace;
        texture2.normalMap.flipY = false
        texture2.roughnessMap.colorSpace = LinearSRGBColorSpace;
        texture2.roughnessMap.flipY = false
        texture2.aoMap.colorSpace = LinearSRGBColorSpace;
        texture2.aoMap.flipY = false
        materialRef.current.needUpdate = false
    }, [table2Texture, texture2])
    // const [texture, setTexture] = useState(texture1)
    // useEffect(() => {
    //     console.log(table2Texture)
    //     if (table2Texture === 'texture1') { 
    //         setTexture(texture1) 
    //     }
    //     if (table2Texture === 'texture2') { 
    //         console.log(texture2)
    //         setTexture(texture2) 
    //     }

    // }, [table2Texture])


    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.036}>
                <mesh castShadow geometry={nodes.defaultMaterial.geometry} rotation={[Math.PI / 2, Math.PI * .25, 0]} >
                    <meshStandardMaterial ref={materialRef} key={table2Texture} {...(table2Texture === "texture1" ? texture1 : texture2)} />
                </mesh>
            </group>
        </group>
    )
}
export default WoodenTable;
//useGLTF.preload('./wooden_table/scene.gltf')
