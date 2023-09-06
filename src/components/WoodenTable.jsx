import { useGLTF, useTexture } from '@react-three/drei'
import { useGlobalContext } from '../context'
import { useEffect, useState } from 'react'

const WoodenTable = (props) => {
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
                    <meshStandardMaterial {...(table2Texture ==="texture1"? texture1 : texture2)} />
                </mesh>
            </group>
        </group>
    )
}
export default WoodenTable;
useGLTF.preload('./wooden_table/scene.gltf')
