import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { TableInterfaceHetre } from './components/TableInterfaceHetre'
import { ProductSwitcher } from './components/ProductSwitcher'
import { useGlobalContext } from './context'
import { TableInterfaceBoisRouge } from './components/TableInterfaceBoisRouge'
import { useHelper } from '@react-three/drei'
import * as THREE from "three"
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
            {counter === 0 && <TableInterfaceHetre />}
            {counter === 1 && <TableInterfaceBoisRouge />}
        </div>
    )
}

export default App
