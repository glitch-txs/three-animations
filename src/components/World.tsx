import React, { useRef } from "react"
import { Stars, Environment, useScroll, Float, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Portal from "@/components/Portal"
import { portals } from "@/constants/portals"
import { easing } from "maath"
import * as THREE from "three"
import Starship from "./Starship"

const World = () => {
	const ref = useRef<THREE.Group>(null)
  const cameraRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

	useFrame((state, delta) => {
    if(cameraRef.current){
      cameraRef.current.position.z = THREE.MathUtils.lerp(scroll.offset * -24, 0, 0)
    }

		if (!ref.current) return
		easing.dampE(
			ref.current.rotation,
			[(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0],
			0.2,
			delta,
		)
	})

	return (
		<group ref={ref}>
			{/* Lighting */}
			<ambientLight intensity={0.5} />
			<Environment preset="sunset" />

			{/* Portals */}
			{portals.map((portal, id) => (
				<Portal texture={portal.src} id={id} key={portal.src} />
			))}

			{/* Stars */}
			<Stars
				radius={100}
				depth={50}
				count={10000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>

			{/* Starship */}
      <group ref={cameraRef} >
        <PerspectiveCamera position={[0,0,16]} fov={30} makeDefault />
        <Float>
				  <Starship />
			  </Float>
      </group>
		</group>
	)
}

export default World
