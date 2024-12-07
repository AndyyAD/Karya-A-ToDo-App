import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const poppins = localFont({
	src: "./fonts/Poppins-ExtraBold.woff",
    variable: "--font-poppins",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Kaarya",
	description: "This is a ToDo app made by Ashish Deb using nextJS, Tailwind and Typescript.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`} >
				<Navbar />
				{children}
			</body>
		</html>
	);
}
