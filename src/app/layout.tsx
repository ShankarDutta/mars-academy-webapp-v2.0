import { bebasNeueHeading, manrope } from "@/lib/font";
import { LayoutPropsType } from "@/lib/type";
import { cn } from "@/lib/utils";
import "./globals.css";

const RootLayout = ({ children }: LayoutPropsType) => {
	return (
		<html
			lang="en"
			className={cn(
				"font-sans",
				manrope.variable,
				bebasNeueHeading.variable,
			)}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
