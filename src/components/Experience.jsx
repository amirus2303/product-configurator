import React, { Suspense } from "react";
import { Center } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
import { useGlobalContext } from "../context";



const LazyWoodenTable = React.lazy(() => import('./WoodenTable'));
const LazySofa2 = React.lazy(() => import('./Sofa2'));
const LazyBahut = React.lazy(() => import('./Bahut'));
const WovenChair = React.lazy(() => import('./WovenChair'));


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
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
            <directionalLight intensity={1.76} angle={0.1} penumbra={1} position={[5, 5, 5]} castShadow />
            <directionalLight intensity={0.52} angle={0.1} penumbra={1} position={[-5, 5, 5]} castShadow />
            <directionalLight intensity={0.58} angle={0.1} penumbra={1} position={[5, 5, -5]} castShadow />
            <Environment preset="studio" />
            <ContactShadows position={[0, -0.5, 0]} opacity={0.25} scale={10} blur={1.5} far={2} />
            <Suspense fallback={<Html><h3>Chargement...</h3></Html>}>

                {counter === 0 && <WovenChair rotation={[0, Math.PI * 0.25, 0]} scale={0.025} position={[0, -0.5, 0]} />}
                {counter === 1 && <LazyWoodenTable scale={1.1} position={[0, -0.5, 0]} />}
                {counter === 2 && <LazySofa2 scale={1.7} rotation={[0, Math.PI * 0.1, 0]} position={[0, -0.5, 0]} />}
                {counter === 3 && <LazyBahut scale={1.5} rotation={[0, -Math.PI * 0.9, 0]} position={[0, -0.4, 0]} />}

            </Suspense>
        </>
    );
}

export default Experience