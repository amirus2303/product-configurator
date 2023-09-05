import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Carousel from './components/Carousel'

function App() {
    const params = ({ camera }) => {
        camera.lookAt(0,1,0)
    }
    return (
        <div className="app">
            <Canvas
                camera={{
                    zoom: 0.8,
                    position: [0, 2, 5]
                }}
                onCreated={params}
            >
                <color attach="background" args={["#213547"]} />
                <fog attach="fog" args={["#213547", 10, 20]} />
                <Experience />
            </Canvas>
            <Carousel />
        </div>
    )
}

export default App
