/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/model/scene.gltf -o src/components/Starship.tsx -r public
Author: Darren McNerney 3D (https://sketchfab.com/DarrenMcnerney3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spaceship-70e786969e70447c86bc4168df8ccbcd
Title: Spaceship
*/

import React from "react"
import { useGLTF } from "@react-three/drei"

export default function Starship() {
	//@ts-ignore
	const { nodes, materials } = useGLTF("/model/scene.gltf")
	return (
		<group dispose={null} rotation={[0.3, 0, 0]} position={[0, -1, 0]}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={nodes.defaultMaterial.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_1.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_2.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_3.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_4.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_5.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_6.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_7.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_8.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_9.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_10.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_11.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_12.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_13.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_14.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_15.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_16.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_17.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_18.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_19.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_20.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_21.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_22.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_23.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_24.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_25.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_26.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_27.geometry}
						material={materials.material_0}
					/>
					<mesh
						geometry={nodes.defaultMaterial_28.geometry}
						material={materials.material_0}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload("/model/scene.gltf")
