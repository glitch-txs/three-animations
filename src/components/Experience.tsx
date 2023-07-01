import { OrbitControls, useTexture, Environment, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from 'three'

export const Experience = () => {

  const map = useTexture('textures/digital_painting_space.jpg')

  return (
    <>
    <ambientLight intensity={0.5}/>
    <Environment preset="sunset" />
      <OrbitControls />
      <RoundedBox args={[2,3,0.1]} >
        <MeshPortalMaterial side={THREE.DoubleSide} >
          <ambientLight intensity={1}/>
          <Environment preset="sunset" />
          <mesh>
            <sphereGeometry args={[5,64,64]}/>
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>

    </>
  );
};