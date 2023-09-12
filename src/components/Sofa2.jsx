import { useGLTF, useTexture } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

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
	useEffect(() => {
		configTexture(meshRef1);
		configTexture(meshRef2);

	}, [])
	return (
		<group {...props} dispose={null}>
			<mesh castShadow geometry={nodes.part_01.geometry} material={nodes.part_01.material} position={[0.065, 0.545, -0.444]} scale={0.01} >
				<meshStandardMaterial ref={meshRef1} envMapIntensity={0.06} {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.part_02.geometry} material={nodes.part_02.material} position={[0.064, 0.329, -0.458]} scale={0.01} >
				<meshStandardMaterial ref={meshRef2} envMapIntensity={0.06} {...texture2} />
			</mesh>
		</group>
	)
}

export default Sofa2;