import React, { Suspense } from "react";
import { Center } from "@react-three/drei";
import { OrbitControls, Environment, Html, AccumulativeShadows, RandomizedLight, Lightformer } from "@react-three/drei";
import { useGlobalContext } from "../context";



const LazyWoodenTable = React.lazy(() => import('./WoodenTable'));
const LazySofa2 = React.lazy(() => import('./Sofa2'));
const LazyBahut = React.lazy(() => import('./Bahut'));
const WovenChair = React.lazy(() => import('./WovenChair'));
const LazySofa3 = React.lazy(() => import('./Sofa3'));
const LazyCobra1 = React.lazy(() => import('./Cobra1'))
const LazyCobra2 = React.lazy(() => import('./Cobra2'))
const LazyTricot1 = React.lazy(() => import('./Tricot1'))
const LazyLampe1 = React.lazy(() => import('./Lampe1'))


const Experience = () => {
    const { counter } = useGlobalContext();
    // const lightHelper = useRef()
    // const lightHelper2 = useRef()
    // const lightHelper3 = useRef()
    // useHelper(lightHelper, THREE.DirectionalLightHelper)
    // useHelper(lightHelper2, THREE.DirectionalLightHelper)
    // useHelper(lightHelper3, THREE.DirectionalLightHelper)

    return (
        <>
            <OrbitControls
                target={[0, 0.8, 0]}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={<Html><h3>Chargement...</h3></Html>}>
                <Center top>
                    {counter === 0 && <LazyCobra2 scale={0.03} position={[0, -0.5, 0]} />}
                    {counter === 1 && <WovenChair rotation={[0, Math.PI * 0.5, 0]} scale={0.025} position={[0, -0.5, 0]} />}
                    {counter === 2 && <LazySofa3 scale={1.8} position={[0, -0.5, 0]} />}
                    {counter === 3 && <LazySofa2 scale={1.5} rotation={[0, Math.PI * 0.1, 0]} position={[0, -0.5, 0]} />}
                    {counter === 4 && <LazyBahut scale={1.5} rotation={[0, -Math.PI * 0.9, 0]} position={[0, -0.5, 0]} />}
                    {counter === 5 && <LazyTricot1 scale={3} rotation={[0, Math.PI * 0.25, 0]} position={[0, -0.5, 0]} />}
                    {counter === 6 && <LazyLampe1 scale={2.5} rotation={[0, Math.PI * 0.25, 0]} position={[0, -0.5, 0]} />}
                </Center>
                <AccumulativeShadows temporal frames={100} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
                    <RandomizedLight intensity={Math.PI} amount={8} radius={7} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows>
            </Suspense>
        </>
    );
}

export default Experience