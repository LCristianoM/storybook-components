/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
