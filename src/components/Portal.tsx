import {
	OrbitControls,
	useTexture,
	Environment,
	MeshPortalMaterial,
	RoundedBox,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef, useState } from "react"

type Props = {
	texture: string
	id: number
}

function isEven(n: number) {
	return n % 2 === 0
}

const Portal = ({ texture, id }: Props) => {
	const map = useTexture(texture)
	const mesh = useRef<THREE.Mesh>(null)
	const portalRef = useRef<THREE.Mesh>(null)
	const [hover, setHover] = useState<boolean>(false)
	const direction = isEven(id) ? 1 : -1

	useFrame(() => {
		if (!mesh.current?.rotation) return
		mesh.current.rotation.y += 0.003
		mesh.current.rotation.x += 0.003

		if (portalRef.current) {
			portalRef.current.rotation.y = hover
				? THREE.MathUtils.lerp(
						portalRef.current.rotation.y,
						-Math.PI * 1,
						0.025,
				  )
				: THREE.MathUtils.lerp(
						portalRef.current.rotation.y,
						-direction * 1.1,
						0.025,
				  )
		}
	})

	return (
		<>
			<RoundedBox
				ref={portalRef}
				onPointerEnter={() => {
					setHover(true)
				}}
				onPointerLeave={() => {
					setHover(false)
				}}
				args={[2, 3, 0.1]}
				position={[direction * 3, 0.1, -id * 6]}
				rotation={[0, -direction * 1.1, 0]}
			>
				<MeshPortalMaterial side={THREE.DoubleSide}>
					<ambientLight intensity={1} />
					<Environment preset="sunset" />
					<mesh ref={mesh}>
						<sphereGeometry args={[15, 64, 64]} />
						<meshStandardMaterial map={map} side={THREE.BackSide} />
					</mesh>
				</MeshPortalMaterial>
			</RoundedBox>
		</>
	)
}

export default Portal
