import { useGLTF, useTexture } from '@react-three/drei'

const Bahut = (props) => {
	const { nodes } = useGLTF('./bahut/bahut.glb')
	const texture1 = useTexture({

		map: './bahut/map.jpg',
		displacementMap: './bahut/height.jpg',
		normalMap: './bahut/normal.jpg',
		roughnessMap: './bahut/roughness.jpg',
		metalnessMap: './bahut/metal.jpg',
	})
	return (
		<group {...props} dispose={null} >
			<mesh geometry={nodes.upper_01.geometry} material={nodes.upper_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Lateral_01.geometry} material={nodes.Lateral_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Lateral_02.geometry} material={nodes.Lateral_02.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Front_03.geometry} material={nodes.Front_03.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Front_04.geometry} material={nodes.Front_04.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Front_05.geometry} material={nodes.Front_05.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Front_01.geometry} material={nodes.Front_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Front_02.geometry} material={nodes.Front_02.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Legs.geometry} material={nodes.Legs.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.down_01.geometry} material={nodes.down_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
			<mesh geometry={nodes.Back_01.geometry} material={nodes.Back_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial {...texture1} />
			</mesh>
		</group>
	)
}

export default Bahut