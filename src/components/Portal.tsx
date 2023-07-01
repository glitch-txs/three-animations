import { OrbitControls, useTexture, Environment, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from 'three'

type Props = {
  texture: string
}

const Portal = ({texture}: Props) => {
  
  const map = useTexture(texture)

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
}

export default Portal