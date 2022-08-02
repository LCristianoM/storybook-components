import "./mylabel.css";

export interface MyLabelProps {
	/**
	 * What type of data use
	 */
	label: string;
	/**
	 * What tags are ok
	 */
	size: "normal" | "h1" | "h2" | "h3";
	/**
	 * All capitalized
	 */
	allCaps?: boolean;
	/**
	 * Buttons basics colors
	 */
	color?: "primary" | "secondary" | "tertiary";
	/**
	 * Font color personalized
	 */
	fontColor?: string;
	/**
	 * Buttons basics colors
	 */
	backgroundColor?: string;
	
}

export const MyLabel = ({
	allCaps = false,
	color = "primary",
	label = "No Label",
	size = "normal",
	fontColor="",
	backgroundColor = "transparent"
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color} `} style={{ color: fontColor, backgroundColor: backgroundColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};


export default MyLabel;