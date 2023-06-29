import { Suspense, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import Loader from '../Loader';
import AstronautCanvas from '../../../public/spaceship/Astronaut';

const Earth = (props) => {
  // const earth = useGLTF('./planet/scene.glb')
  // return (
  //   <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  // )
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./planet/scene.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" scale={3} geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" scale={3} geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('./planet/scene.glb')

const EarthCanvas = () => {
  return (
    <Canvas
      // shadows
      //frameloop='demand'
      //gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" />
      <spotLight position={[5, 0, 5]} intensity={2.5} penumbra={1} angle={0.35} castShadow color="#0c8cbf" />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

    </Canvas>
  )
}

export default AstronautCanvas