import { Bebas_Neue, Manrope } from "next/font/google";

export const bebasNeueHeading = Bebas_Neue({
	weight: "400",
	subsets: ["latin-ext"],
	variable: "--font-heading",
});

export const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
