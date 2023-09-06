import { Center, OrbitControls, Stage } from "@react-three/drei";
import Table from "./Table";
import Chair from './Chair'
import { useGlobalContext } from "../context";
import WoodenTable from "./WoodenTable";


const Experience = () => {
    const {counter} =useGlobalContext();
    const {legs} = useGlobalContext() //for rerendering
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
                shadows={{ type: 'accumulative', color: "#d9afd9", colorBlend: 8, opacity: 0.4 }}
                adjustCamera={2}
            >
                <Center>
                    {counter===0 &&<Table />}
                    {counter===1 &&<WoodenTable />}
                </Center>
            </Stage>

        </>
    );
}

export default Experience