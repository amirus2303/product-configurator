
import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

const Cobra1 = (props) => {
	const { nodes } = useGLTF('./cobra_01/cobra.glb')
	const { cobra1Texture } = useGlobalContext()

	const texture1 = useTexture({
		map: './cobra_01/textures_01/map1.jpg',
		normalMap: './cobra_01/textures_01/normal1.jpg',
		roughnessMap: './cobra_01/textures_01/roughness1.jpg',
		metalnessMap: './cobra_01/textures_01/metalic1.jpg',
	})

	const texture2 = useTexture({
		map: './cobra_01/textures_02/map2.jpg',
		normalMap: './cobra_01/textures_02/normal2.jpg',
		roughnessMap: './cobra_01/textures_02/roughness2.jpg',
		metalnessMap: './cobra_01/textures_02/metalic2.jpg',
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
	const meshRef5 = useRef()
	const meshRef6 = useRef()
	const meshRef7 = useRef()
	const meshRef8 = useRef()
	const meshRef9 = useRef()



	const [texture, setTexture] = useState(texture1)
	useEffect(() => {
		configTexture(meshRef1);
		configTexture(meshRef2);
		configTexture(meshRef3);
		configTexture(meshRef4);
		configTexture(meshRef5);
		configTexture(meshRef6);
		configTexture(meshRef7);
		configTexture(meshRef8);
		configTexture(meshRef9);

	}, [cobra1Texture, texture])




	useEffect(() => {
		if (cobra1Texture === 'texture1') {
			setTexture(texture1)
		}
		if (cobra1Texture === 'texture2') {
			setTexture(texture2)
		}

	}, [cobra1Texture])
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Object043.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef1} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object044.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef2} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object045.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef3} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object046.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef4} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object047.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef5} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object048.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef6} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object049.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef7} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object050.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef8} envMapIntensity={0.06} {...texture} />
			</mesh>
			<mesh geometry={nodes.Object051.geometry} position={[0.004, 0.309, 0.018]} scale={0.01}>
				<meshStandardMaterial ref={meshRef9} envMapIntensity={0.06} {...texture} />
			</mesh>
		</group>
	)
}

export default Cobra1