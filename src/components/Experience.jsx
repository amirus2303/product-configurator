import React, { Suspense } from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
//import Table from "./Table";
//import Table2 from "./Table2";
import { useGlobalContext } from "../context";
//import WoodenTable from "./WoodenTable";
//import Sofa from "./Sofa";
const LazyTable2 = React.lazy(() => import('./Table2'));
const LazyWoodenTable = React.lazy(() => import('./WoodenTable'));
const LazySofa = React.lazy(() => import('./Sofa'));
const LazyBahut = React.lazy(() => import('./Bahut'));


const Experience = () => {
    const { counter } = useGlobalContext();

    return (
        <>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Environment preset="city" />
            <ContactShadows position={[0, -0.5, 0]} opacity={0.25} scale={10} blur={1.5} far={2} />
            <Suspense>
                {counter === 0 && <LazyTable2 rotation={[0, Math.PI * 0.25, 0]} />}
                {counter === 1 && <LazyWoodenTable scale={0.8} />}
                {counter === 2 && <LazySofa scale={0.8} rotation={[0, Math.PI * 0.25, 0]} />}
                {counter === 3 && <LazyBahut scale={1.1} rotation={[0, -Math.PI * 0.9, 0]} position={[0, -0.5, 0]} />}
            </Suspense>
        </>
    );
}

export default Experience