
import { useGLTF } from '@react-three/drei'

const Table2 = (props) => {
	const { nodes, materials } = useGLTF('./folding_table/scene.gltf')
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.973} >
				<mesh geometry={nodes.defaultMaterial.geometry} material={materials.Folding_Table} rotation={[Math.PI / 2, 0, 0]} />
			</group>
		</group >
	)
}
export default Table2

useGLTF.preload('./folding_table/scene.gltf')
