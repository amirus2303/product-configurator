import { useGLTF, useTexture } from '@react-three/drei'

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
		metalicMap: './sofa_visio/metalic2.jpg',
	})
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.part_01.geometry} material={nodes.part_01.material} position={[0, 0.004, 0]} scale={0.01}>
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.part_02.geometry} material={nodes.part_02.material} position={[-0.887, 0.393, 0]} scale={0.01}>
				<meshStandardMaterial {...texture2} />
			</mesh>
		</group>
	)
}

export default Sofa2;