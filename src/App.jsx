import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import {TableInterfaceHetre} from './components/TableInterfaceHetre'
import {ProductSwitcher} from './components/ProductSwitcher'
import { useGlobalContext } from './context'
import { TableInterfaceBoisRouge } from './components/TableInterfaceBoisRouge'

function App() {
    const {counter} =useGlobalContext()
    return (
        <div className="app">
            <Canvas
                shadows
                camera={{ position: [4, 4, -12], fov: 35 }}
            >
                <Experience />
            </Canvas>
            <ProductSwitcher />
            {counter===0&&<TableInterfaceHetre />}
            {counter===1&&<TableInterfaceBoisRouge/>}
        </div>
    )
}

export default App
