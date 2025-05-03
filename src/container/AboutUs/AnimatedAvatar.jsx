/*import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('/assets/avatar.glb');
  return <primitive object={scene} scale={1.5} position={[0, -1.2, 0]} />;
}

const AnimatedAvatar = () => (
  <div className="avatar__container">
    <Canvas camera={{ position: [0, 1.5, 3.5], fov: 35 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <AvatarModel />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
    <p className="avatar__hi-text">Hi 👋</p>
  </div>
);

export default AnimatedAvatar;*/

