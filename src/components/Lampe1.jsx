
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import configTexture from '../utils/configtexture';

const Lampe1 = (props) => {
  const { nodes } = useGLTF('./lampe_01/lampe_01.glb')
  const texture1 = useTexture({
    map: './lampe_01/textures/diffuse1.jpg',
    normalMap: './lampe_01/textures/normal1.jpg',
    roughnessMap: './lampe_01/textures/roughness1.jpg',
    metalnessMap: './lampe_01/textures/metalness1.jpg',
  })


  const meshRef1 = useRef()
  const meshRef2 = useRef()
  useEffect(() => {
    configTexture(meshRef1);
    configTexture(meshRef2);
  }, [])


  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.abat_jour.geometry} position={[0, 0.487, -0.007]} >
        <meshStandardMaterial ref={meshRef1} {...texture1} />
      </mesh>
      <mesh castShadow geometry={nodes.Object001.geometry} position={[0, 0.487, -0.007]} >
        <meshStandardMaterial ref={meshRef2} {...texture1} />
      </mesh>
      <Environment>
        <Lightformer intensity={10} color={'white'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
        <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
        <Lightformer intensity={50} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
      </Environment>
    </group>
  )
}

export default Lampe1
