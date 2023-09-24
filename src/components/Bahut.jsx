import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { SRGBColorSpace, LinearSRGBColorSpace } from 'three';

const Bahut = (props) => {
	const { nodes } = useGLTF('./bahut/bahut.glb')
	const texture1 = useTexture({

		map: './bahut/map.jpg',
		displacementMap: './bahut/height.jpg',
		normalMap: './bahut/normal.jpg',
		roughnessMap: './bahut/roughness.jpg',
		metalnessMap: './bahut/metal.jpg',
	})
	const meshRef1 = useRef()
	const meshRef2 = useRef()
	const meshRef3 = useRef()
	const meshRef4 = useRef()
	const meshRef5 = useRef()
	const meshRef6 = useRef()
	const meshRef7 = useRef()
	const meshRef8 = useRef()
	const meshRef9 = useRef()
	const meshRef10 = useRef()
	const meshRef11 = useRef()

	const configTexture = (ref) => {
		ref.current.map.colorSpace = SRGBColorSpace; // Set the map to sRGB
		ref.current.map.flipY = false;
		ref.current.map.needsUpdate = true;

		ref.current.displacementMap.colorSpace = LinearSRGBColorSpace;
		ref.current.displacementMap.flipY = false;
		ref.current.displacementMap.needsUpdate = false;

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
		configTexture(meshRef3);
		configTexture(meshRef4);
		configTexture(meshRef5);
		configTexture(meshRef6);
		configTexture(meshRef7);
		configTexture(meshRef8);
		configTexture(meshRef9);
		configTexture(meshRef10);
		configTexture(meshRef11);
	}, [])

	return (
		<group {...props} dispose={null} >
			<mesh castShadow geometry={nodes.upper_01.geometry} material={nodes.upper_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef1} {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Lateral_01.geometry} material={nodes.Lateral_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef2} {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Lateral_02.geometry} material={nodes.Lateral_02.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef3}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Front_03.geometry} material={nodes.Front_03.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef4}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Front_04.geometry} material={nodes.Front_04.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef5}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Front_05.geometry} material={nodes.Front_05.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef6}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Front_01.geometry} material={nodes.Front_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef7}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Front_02.geometry} material={nodes.Front_02.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef8}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Legs.geometry} material={nodes.Legs.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef9}  {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.down_01.geometry} material={nodes.down_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef10} {...texture1} />
			</mesh>
			<mesh castShadow geometry={nodes.Back_01.geometry} material={nodes.Back_01.material} position={[0, 0.787, 0]} scale={0.01} >
				<meshStandardMaterial envMapIntensity={0.06} ref={meshRef11} {...texture1} />
			</mesh>

            <Environment background>
                <Lightformer intensity={80} color={'white'} rotation-y={Math.PI / 2} position={[-5, 0, 1]} scale={[20, 1, 1]} />
                <Lightformer intensity={40} rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[20, 0.9, 1]} />
                <Lightformer intensity={100} rotation-y={Math.PI } position={[2, 1, 5]} scale={[20, 1, 30]} />
            </Environment>
		</group>
	)
}

export default Bahut
