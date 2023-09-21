import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

import { ProductSwitcher } from './components/ProductSwitcher'
import { useGlobalContext } from './context'
import { TableInterfaceBoisRouge } from './components/TableInterfaceBoisRouge'
import { Cobra1Interface } from './components/Cobra1Interface'
import { useRef } from 'react'

function App() {
    const { counter } = useGlobalContext()

    return (
        <div className="app">
            <Canvas
                shadows
                camera={{ position: [0, 2, 6], fov: 45 }}
            >
                <Experience />
            </Canvas>
            <ProductSwitcher />
            {/* {counter === 0 && <Cobra1Interface />} */}
            {counter === 1 && <TableInterfaceBoisRouge />}
        </div>
    )
}

export default App
