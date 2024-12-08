"use client";
import {useEffect} from "react";
import { initFlowbite } from 'flowbite';
import Navbar from "@/components/Navbar";

export default function Home() {
	useEffect(() => {
		// Initialize Flowbite components
		initFlowbite();
	}, []);

	return (
		<div>
			<Navbar/>
			The website is currently under construction.
		</div>
	);
}
