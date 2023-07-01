import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Portal from "@/components/Portal";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
					<Portal texture="textures/digital_painting_space.jpg" />
				</Canvas>
			</main>
		</>
	);
}
