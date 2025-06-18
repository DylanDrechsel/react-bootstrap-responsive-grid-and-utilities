/**
 * COLUMN COMPONENT (This is where the meat and potatoes happen!)
 *
 * The Col component represents individual columns within a row.
 * It supports responsive breakpoints and can specify different column widths at different screen sizes
 * My Grid System is based on 12 columns, so values 1-12 represent portions of the full Row
 *
 * Breakpoint Props
 * - number (1-12): Specifies how many column this element should span
 * - 'auto': Column takes up only as much space as its content requires
 * - undefined: No specific width constraint for this breakpoint
 *
 * Offset Props
 * - number (0-11): Adds left margin to push the column to the right
 *
 * Breakpoint Sizes
 * - xxs: Extra small devices (phones, <576px)
 * - xs: Small devices (landscape phones, ≥576px)
 * - sm: Medium devices (tablets, ≥768px)
 * - md: Small desktop (small desktops, ≥992px)
 * - lg: Large desktop (medium desktops, ≥1200px)
 * - xl: Extra large desktop (large desktops, ≥1400px)
 * - xxl: Extra extra large desktop (larger desktops, ≥1600px)
 */
import { type FC } from "react";
interface ColProps {
    children: React.ReactNode;
    className?: string;
    xxs?: number | 'auto';
    xs?: number | 'auto';
    sm?: number | 'auto';
    md?: number | 'auto';
    lg?: number | 'auto';
    xl?: number | 'auto';
    xxl?: number | 'auto';
    offsetXxs?: number;
    offsetXs?: number;
    offsetSm?: number;
    offsetMd?: number;
    offsetLg?: number;
    offsetXl?: number;
    offsetXxl?: number;
}
export declare const Col: FC<ColProps>;
export {};
