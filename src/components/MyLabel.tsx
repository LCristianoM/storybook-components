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
	
}

export const MyLabel = ({
	allCaps = false,
	color = "primary",
	label = "No Label",
	size = "normal",
	fontColor="",
}: MyLabelProps) => {
	return <span 
    className={`label ${size} text-${color} `}
    style={{ color: fontColor}}
    >
      {allCaps ? label.toUpperCase() : label}</span>;
};
