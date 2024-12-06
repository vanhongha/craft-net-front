"use client";
import Navbar from "@/components/navbar";
import {useEffect} from "react";
import { initFlowbite } from 'flowbite';

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
