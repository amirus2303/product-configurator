import React, { Suspense, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
//import Table from "./Table";
//import Table2 from "./Table2";
import { useGlobalContext } from "../context";
//import WoodenTable from "./WoodenTable";
//import Sofa from "./Sofa";
const LazyTable2 = React.lazy(() => import('./Table2'));
const LazyWoodenTable = React.lazy(() => import('./WoodenTable'));
const LazySofa = React.lazy(() => import('./Sofa'));
const LazySofa2 = React.lazy(() => import('./Sofa2'));
const LazyBahut = React.lazy(() => import('./Bahut'));
import LevaComponent from "./LevaComponent";
import * as THREE from 'three'

const Experience = () => {
    const { counter } = useGlobalContext();
    const { directionnalLightIntensity1, directionnalLightIntensity2, directionnalLightIntensity3 } = LevaComponent()
    const lightHelper = useRef()
    const lightHelper2 = useRef()
    const lightHelper3 = useRef()
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
            <directionalLight ref={lightHelper} intensity={directionnalLightIntensity1} angle={0.1} penumbra={1} position={[5, 5, 5]} castShadow />
            <directionalLight ref={lightHelper2} intensity={directionnalLightIntensity2} angle={0.1} penumbra={1} position={[-5, 5, 5]} castShadow />
            <directionalLight ref={lightHelper3} intensity={directionnalLightIntensity3} angle={0.1} penumbra={1} position={[5, 5, -5]} castShadow />
            <Environment preset="studio" />
            <ContactShadows position={[0, -0.5, 0]} opacity={0.25} scale={10} blur={1.5} far={2} />
            <Suspense fallback={<Html><h3>Chargement...</h3></Html>}>
                {counter === 0 && <LazyTable2 rotation={[0, Math.PI * 0.25, 0]} />}
                {counter === 1 && <LazyWoodenTable scale={0.8} />}
                {counter === 2 && <LazySofa2 scale={0.8} rotation={[0, Math.PI * 0.25, 0]} />}
                {counter === 3 && <LazyBahut scale={1.3} rotation={[0, -Math.PI * 0.9, 0]} position={[0, -0.5, 0]} />}
            </Suspense>
        </>
    );
}

export default Experience