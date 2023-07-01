import React, { useRef } from 'react'
import { Stars, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Portal from "@/components/Portal"
import { portals } from "@/constants/portals"
import { easing } from 'maath'
import * as THREE from 'three'

const World = () => {
  const ref = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if(!ref.current) return
    easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
  })
  return (
    <group ref={ref}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
					{portals.map((portal, id) => (
						<Portal texture={portal.src} id={id} key={portal.src} />
					))}
          <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

export default World