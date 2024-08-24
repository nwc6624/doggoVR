import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { Box, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const VRScene: React.FC = () => {
  const { gl } = useThree();

  useEffect(() => {
    gl.xr.enabled = true;
    document.body.appendChild(VRButton.createButton(gl));
  }, [gl]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <OrbitControls />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Canvas>
      <VRScene />
    </Canvas>
  );
};

export default App;
