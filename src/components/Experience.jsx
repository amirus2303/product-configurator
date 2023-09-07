import { Center, OrbitControls, Stage, } from "@react-three/drei";
import Table from "./Table";
import { useGlobalContext } from "../context";
import WoodenTable from "./WoodenTable";
import Sofa from "./Sofa";


const Experience = () => {
    const { counter } = useGlobalContext();

    return (
        <>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
            <Stage
                intensity={1.5}
                environment="city"
                SoftShadows
                shadows={{type: "accumulative", color:"#f0f0f0f", colorBlend: 2, opacity: 2}}
                preset="rembrandt"
                adjustCamera={false}
            >
                
                    {counter === 0 && <Table scale={1.2} />}
                    {counter === 1 && <WoodenTable scale={1.8} />}
                    {counter === 2 && <Sofa scale={1.9}  />}
                
            </Stage>

        </>
    );
}

export default Experience