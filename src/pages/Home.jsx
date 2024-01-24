/* trunk-ignore-all(prettier) */
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"
import Island  from '../models/Island';
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Candy from "../models/Candy";
import Plane from "../models/Plane";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [2, -8, -51];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
    }else{
      screenScale=[1,1,1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor='#b1e1ff' groundColor="#000000" intensity={1} />
          <Bird/>
          {/* <Sky/> */}
          <Plane/>
          <Candy
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
        
      </Canvas>
    </section>
  )
}

export default Home