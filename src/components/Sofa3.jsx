
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';


const Sofa3 = (props) => {
	const { nodes, materials } = useGLTF('./sofa_03/sofa_03_1k.gltf')

	const texture1 = useTexture({
		map: './sofa_03/texture1/diffuse1.jpg',
		normalMap: './sofa_03/texture1/normal1.jpg',
		roughnessMap: './sofa_03/texture1/roughness1.jpg',
	})


	const meshRef1 = useRef()
	const meshRef2 = useRef()


	const configTexture = (ref) => {
		ref.current.map.colorSpace = SRGBColorSpace; // Set the map to sRGB
		//ref.current.map.flipY = false;
		ref.current.map.needsUpdate = true;

		ref.current.normalMap.colorSpace = LinearSRGBColorSpace;
		ref.current.normalMap.flipY = false;
		ref.current.normalMap.needsUpdate = true;

		ref.current.roughnessMap.colorSpace = LinearSRGBColorSpace;
		ref.current.roughnessMap.flipY = false;
		ref.current.roughnessMap.needsUpdate = true;

		ref.current.needsUpdate = true;
	}
	useEffect(() => {
		configTexture(meshRef1);
		configTexture(meshRef2);

	}, [])
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.sofa_02_Base.geometry} material={materials.sofa_02} position={[0, 0, 0.031]} >
				<meshStandardMaterial ref={meshRef1} {...texture1} envMapIntensity={0.2} />
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.sofa_02_Seat.geometry} material={materials.sofa_02} position={[0, 0, 0.031]} >
				<meshStandardMaterial ref={meshRef2} {...texture1} envMapIntensity={0.2} />
			</mesh>

            <Environment background>
                <Lightformer intensity={40} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={40} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={40} rotation-y={Math.PI } position={[2, 2, 3]} scale={[20, 1, 30]} />
            </Environment>
		</group>
	)
}

export default Sofa3
