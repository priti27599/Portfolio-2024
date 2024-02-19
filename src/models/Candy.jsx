

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/candy.glb';

const Candy = ({isRotating, setIsRotating, ...props}) => {
  const candyRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX;
    
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (isRotating) {
      const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX;
    
    const delta = (clientX - lastX.current) / viewport.width;

    candyRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      candyRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      candyRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handlekeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      candyRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = candyRef.current.rotation.y;

      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handlekeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handlekeyUp);

    }
  },[gl,handlePointerDown,handlePointerUp,handlePointerMove])

  return (
      <a.group ref={candyRef} {...props} >
      <a.group rotation={[-Math.PI / 2, 0, 0.2]} scale={1.5}>
        <a.group rotation={[Math.PI / 2, 1, 0]} >
          <a.group
            position={[13.264, 5.242, 4.096]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          <a.group
            position={[-5.091, 8.434, -6.144]}
            rotation={[Math.PI / 2, 0, 2.926]}
            scale={0.061}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials["Material.023"]}
            />
          </a.group>
          <a.group
            position={[7.376, 6.566, -13.231]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[0.01, 0.01, 0.03]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          <a.group
            position={[-17.802, 6.242, -5.938]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          
          <a.group
            position={[5.806, 6.242, 9.255]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
        
         
         
          <a.group
            position={[13.331, 6.242, 16.949]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
         
          
          <a.group
            position={[6.779, 6.242, 16.76]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_172.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_173.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          <a.group
            position={[-19.384, 6.242, 16.599]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_175.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_176.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          <a.group
            position={[-15.185, 6.242, 16.76]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_178.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_179.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          {/*  */}
          <a.group
            position={[12.916, 6.242, -11.179]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_184.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_185.geometry}
              material={materials["Material.026"]}
            />
          </a.group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.028"]}
            position={[-19.683, -1.546, -14.23]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.572, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.024"]}
            position={[-5.51, 4.23, -1.33]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[20.477, 0.908, 13.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["Material.029"]}
            position={[-0.442, 6.861, -16.432]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1.287, 1.822, 1.914]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials["Material.025"]}
            position={[13.068, 7.435, 14.454]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials["Material.025"]}
            position={[14.345, 7.71, -17.935]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[0.01, 0.01, 0.012]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials["Material.025"]}
            position={[-17.099, 7.435, 0.954]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials["Material.025"]}
            position={[-15.654, 7.681, 13.842]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[0.01, 0.01, 0.012]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials["Material.025"]}
            position={[7.965, 7.435, -3.547]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials["Material.030"]}
            position={[4.174, 6.057, -17.605]}
            rotation={[-Math.PI, -1.245, -Math.PI / 2]}
            scale={[0.015, 0.013, 0.148]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials["Material.030"]}
            position={[-11.777, 6.421, -6.659]}
            rotation={[0, -0.968, Math.PI / 2]}
            scale={[0.017, 0.008, 0.106]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials["Material.031"]}
            position={[-3.076, 5.399, 7.079]}
            rotation={[-Math.PI / 2, 0, 0.128]}
            scale={[1.548, 5.887, 0.424]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials["Material.032"]}
            position={[14.704, 5.499, 13.081]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials["Material.025"]}
            position={[0.484, 7.435, -9.233]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials["Material.025"]}
            position={[-10.302, 7.435, 2.905]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials["Material.025"]}
            position={[-16.587, 7.435, 6.162]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials["Material.025"]}
            position={[5.982, 7.435, 1.223]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials["Material.025"]}
            position={[13.922, 7.435, -7.929]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials["Material.032"]}
            position={[9.419, 5.499, 11.466]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials["Material.032"]}
            position={[7.556, 5.499, 10.969]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials["Material.032"]}
            position={[1.666, 5.499, 12.848]}
            scale={[0.828, 1.021, 0.828]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials["Material.032"]}
            position={[0.447, 5.433, 13.569]}
            scale={[0.632, 0.639, 0.632]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_88.geometry}
            material={materials["Material.032"]}
            position={[1.52, 5.473, 14.201]}
            scale={[0.509, 0.512, 0.509]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_90.geometry}
            material={materials["Material.032"]}
            position={[-4.4, 5.433, 13.511]}
            rotation={[Math.PI, -1.382, Math.PI]}
            scale={[0.632, 0.639, 0.632]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_92.geometry}
            material={materials["Material.032"]}
            position={[-5.222, 5.473, 14.446]}
            rotation={[Math.PI, -1.382, Math.PI]}
            scale={[0.509, 0.512, 0.509]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_94.geometry}
            material={materials["Material.032"]}
            position={[-6.363, 5.534, 13.604]}
            rotation={[Math.PI, -1.382, Math.PI]}
            scale={[0.695, 0.774, 0.695]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials["Material.032"]}
            position={[5.129, 5.575, -1.155]}
            rotation={[0, -1.185, 0]}
            scale={[1.088, 1.342, 1.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials["Material.032"]}
            position={[3.648, 5.488, -2.283]}
            rotation={[0, -1.185, 0]}
            scale={[0.831, 0.84, 0.831]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials["Material.032"]}
            position={[3.408, 5.541, -0.664]}
            rotation={[0, -1.185, 0]}
            scale={[0.67, 0.672, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials["Material.032"]}
            position={[-14.074, 5.499, 5.127]}
            rotation={[Math.PI, -1.39, Math.PI]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials["Material.032"]}
            position={[-13.25, 5.499, 3.383]}
            rotation={[Math.PI, -1.39, Math.PI]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_106.geometry}
            material={materials["Material.032"]}
            position={[-10.441, 5.499, 15.049]}
            rotation={[0, -0.395, 0]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials["Material.032"]}
            position={[-14.695, 5.499, 11.523]}
            rotation={[0, -0.395, 0]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_110.geometry}
            material={materials["Material.032"]}
            position={[-16.223, 5.499, 10.346]}
            rotation={[0, -0.395, 0]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_112.geometry}
            material={materials["Material.032"]}
            position={[0.847, 5.575, 6.511]}
            rotation={[-Math.PI, -0.472, -Math.PI]}
            scale={[1.088, 1.342, 1.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_114.geometry}
            material={materials["Material.032"]}
            position={[1.843, 5.488, 4.938]}
            rotation={[-Math.PI, -0.472, -Math.PI]}
            scale={[0.831, 0.84, 0.831]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_116.geometry}
            material={materials["Material.032"]}
            position={[0.209, 5.541, 4.838]}
            rotation={[-Math.PI, -0.472, -Math.PI]}
            scale={[0.67, 0.672, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_118.geometry}
            material={materials["Material.032"]}
            position={[-8.438, 5.575, 6.971]}
            rotation={[0, 1.309, 0]}
            scale={[1.088, 1.342, 1.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_120.geometry}
            material={materials["Material.032"]}
            position={[-7.936, 5.488, 8.764]}
            rotation={[0, 1.309, 0]}
            scale={[0.831, 0.84, 0.831]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_122.geometry}
            material={materials["Material.032"]}
            position={[-6.769, 5.541, 7.617]}
            rotation={[0, 1.309, 0]}
            scale={[0.67, 0.672, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_124.geometry}
            material={materials["Material.032"]}
            position={[-12.139, 5.575, -2.651]}
            rotation={[0, 1.309, 0]}
            scale={[1.088, 1.342, 1.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_126.geometry}
            material={materials["Material.032"]}
            position={[-11.637, 5.488, -0.859]}
            rotation={[0, 1.309, 0]}
            scale={[0.831, 0.84, 0.831]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={materials["Material.032"]}
            position={[-10.47, 5.541, -2.005]}
            rotation={[0, 1.309, 0]}
            scale={[0.67, 0.672, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_130.geometry}
            material={materials["Material.032"]}
            position={[6.434, 5.575, -9.111]}
            rotation={[0, 1.309, 0]}
            scale={[1.088, 1.342, 1.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_132.geometry}
            material={materials["Material.032"]}
            position={[6.935, 5.488, -7.319]}
            rotation={[0, 1.309, 0]}
            scale={[0.831, 0.84, 0.831]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_134.geometry}
            material={materials["Material.032"]}
            position={[8.102, 5.541, -8.465]}
            rotation={[0, 1.309, 0]}
            scale={[0.67, 0.672, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={materials["Material.032"]}
            position={[8.679, 5.499, 4.793]}
            rotation={[Math.PI, -1.053, Math.PI]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_138.geometry}
            material={materials["Material.032"]}
            position={[12.699, 5.499, 1.003]}
            rotation={[Math.PI, -1.053, Math.PI]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_140.geometry}
            material={materials["Material.032"]}
            position={[14.054, 5.499, -0.37]}
            rotation={[Math.PI, -1.053, Math.PI]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_142.geometry}
            material={materials["Material.032"]}
            position={[10.177, 5.499, 2.029]}
            rotation={[-Math.PI, 0.831, -Math.PI]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_144.geometry}
            material={materials["Material.032"]}
            position={[12.547, 5.499, 7.02]}
            rotation={[-Math.PI, 0.831, -Math.PI]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_146.geometry}
            material={materials["Material.032"]}
            position={[13.436, 5.499, 8.732]}
            rotation={[-Math.PI, 0.831, -Math.PI]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_148.geometry}
            material={materials["Material.032"]}
            position={[9.919, 5.499, 14.273]}
            rotation={[0, 0.769, 0]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_150.geometry}
            material={materials["Material.032"]}
            position={[4.999, 5.499, 16.788]}
            rotation={[0, 0.769, 0]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_152.geometry}
            material={materials["Material.032"]}
            position={[3.315, 5.499, 17.727]}
            rotation={[0, 0.769, 0]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_154.geometry}
            material={materials["Material.032"]}
            position={[9.326, 5.499, -18.289]}
            rotation={[-Math.PI, -0.585, -Math.PI]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_156.geometry}
            material={materials["Material.032"]}
            position={[11.153, 5.499, -18.905]}
            rotation={[-Math.PI, -0.585, -Math.PI]}
            scale={[0.897, 0.9, 0.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_158.geometry}
            material={materials["Material.032"]}
            position={[-5.246, 5.499, -17.836]}
            rotation={[-Math.PI, 0.831, -Math.PI]}
            scale={[1.058, 1.305, 1.058]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_160.geometry}
            material={materials["Material.025"]}
            position={[10.935, 7.435, -10.351]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_162.geometry}
            material={materials["Material.025"]}
            position={[4.394, 7.435, 6.929]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_164.geometry}
            material={materials["Material.025"]}
            position={[-9.899, 7.435, 11.613]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_187.geometry}
            material={materials["Material.036"]}
            position={[-5.327, 5.051, 13.598]}
            rotation={[Math.PI / 2, 0.22, -0.568]}
            scale={1.455}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_189.geometry}
            material={materials["Material.036"]}
            position={[8.692, 5.051, 10.421]}
            rotation={[1.485, -0.202, 2.17]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_191.geometry}
            material={materials["Material.036"]}
            position={[-16.654, 5.051, 8.122]}
            rotation={[1.51, 0.211, -0.286]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_193.geometry}
            material={materials["Material.036"]}
            position={[-14.748, 5.051, 3.355]}
            rotation={[1.423, -0.163, 1.834]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_195.geometry}
            material={materials["Material.036"]}
            position={[0.561, 4.633, 1.841]}
            rotation={[1.576, 0.22, -0.593]}
            scale={1.457}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_197.geometry}
            material={materials["Material.036"]}
            position={[8.243, 5.051, -7.523]}
            rotation={[1.667, -0.198, 3.032]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_199.geometry}
            material={materials["Material.036"]}
            position={[2.131, 5.051, -9.767]}
            rotation={[1.755, -0.151, -1.512]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_201.geometry}
            material={materials["Material.036"]}
            position={[-6.267, 5.051, -19.295]}
            rotation={[1.333, -0.003, 2.321]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_203.geometry}
            material={materials["Material.036"]}
            position={[12.87, 5.051, -18.81]}
            rotation={[1.394, 0.16, 1.583]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_205.geometry}
            material={materials["Material.036"]}
            position={[14.889, 5.051, -3.71]}
            rotation={[1.475, -0.218, -2.822]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_207.geometry}
            material={materials["Material.036"]}
            position={[12.951, 5.051, 17.607]}
            rotation={[1.702, -0.199, -1.814]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_209.geometry}
            material={materials["Material.036"]}
            position={[-15.042, 5.051, 17.607]}
            rotation={[1.804, 0.044, -0.649]}
            scale={1.737}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_211.geometry}
            material={materials["Material.032"]}
            position={[9.631, 5.499, -1.258]}
            rotation={[Math.PI, -1.053, Math.PI]}
            scale={[0.789, 0.798, 0.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_213.geometry}
            material={materials["Material.037"]}
            position={[-0.14, 5.671, 15.047]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_215.geometry}
            material={materials["Material.037"]}
            position={[-6.122, 5.671, 9.533]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_217.geometry}
            material={materials["Material.037"]}
            position={[12.103, 5.671, 3.411]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_219.geometry}
            material={materials["Material.037"]}
            position={[4.673, 5.671, 10.748]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_221.geometry}
            material={materials["Material.037"]}
            position={[-8.879, 5.671, -0.701]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_223.geometry}
            material={materials["Material.037"]}
            position={[-17.991, 5.671, -1.122]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_225.geometry}
            material={materials["Material.037"]}
            position={[-13.752, 5.931, 13.144]}
            rotation={[-1.672, -0.057, 0.512]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_227.geometry}
            material={materials["Material.037"]}
            position={[2.062, 5.931, -2.669]}
            rotation={[-1.454, -0.004, 3.11]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_229.geometry}
            material={materials["Material.037"]}
            position={[14.039, 5.931, -9.802]}
            rotation={[-1.546, -0.114, 1.788]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_231.geometry}
            material={materials["Material.037"]}
            position={[6.368, 5.931, -12.09]}
            rotation={[-1.468, -0.055, 2.654]}
            scale={[0.992, 0.261, 0.992]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_233.geometry}
            material={materials["Material.037"]}
            position={[8.537, 5.671, -10.989]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_235.geometry}
            material={materials["Material.037"]}
            position={[2.533, 5.931, 2.378]}
            rotation={[-1.468, -0.055, 2.654]}
            scale={[0.992, 0.261, 0.992]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_237.geometry}
            material={materials["Material.037"]}
            position={[4.701, 5.671, 3.479]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_239.geometry}
            material={materials["Material.037"]}
            position={[15.654, 5.931, 10.654]}
            rotation={[-1.527, 0.108, -1.954]}
            scale={[0.992, 0.261, 0.992]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_241.geometry}
            material={materials["Material.037"]}
            position={[-10.387, 5.931, 17.653]}
            rotation={[-1.54, 0.112, -1.838]}
            scale={[0.992, 0.261, 0.992]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_243.geometry}
            material={materials["Material.037"]}
            position={[6.666, 5.671, 14.17]}
            scale={[0.809, 0.213, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_245.geometry}
            material={materials["Material.037"]}
            position={[-15.406, 5.671, -8.574]}
            scale={[0.809, 0.213, 0.809]}
          />
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_247.geometry}
            material={materials["Material.038"]}
            position={[-8.243, 23.356, -10.585]}
            rotation={[0, 0.559, 0]}
            scale={[2.135, 1.809, 1.996]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_249.geometry}
            material={materials["Material.039"]}
            position={[7.364, 22.745, 6.298]}
            scale={0.73}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_251.geometry}
            material={materials["Material.040"]}
            position={[10.147, 21.412, -3.101]}
            rotation={[0, -0.94, 0]}
            scale={0.524}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_253.geometry}
            material={materials["Material.041"]}
            position={[-4.576, 27.497, 0]}
            scale={1.299}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_255.geometry}
            material={materials["Material.039"]}
            position={[-11.054, 22.745, 11.74]}
            rotation={[-Math.PI, 0.919, -Math.PI]}
            scale={0.63}
          /> */}
        </a.group>
      </a.group>
    </a.group>
  );
}
export default Candy;

