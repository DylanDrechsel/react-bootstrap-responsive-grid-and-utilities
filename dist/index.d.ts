import { FC } from 'react';

/**
 * CONTAINER COMPONENT
 *
 * The Container component provides the foundational wrapper for the grid system.
 * It centers content horizontally and applies responsive max-widths at different breakpoints.
 *
 * Props:
 * - fluid: When true, creates a full-width container that spans the entire viewport
 * - children: React nodes to be rendered inside the container
 * - className: Additional CSS classes to apply to the container
 */

interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Container: FC<ContainerProps>;

/**
 * ROW COMPONENT
 *
 * The Row component creates a horizontal group of columns using flexbox.
 * It handles the negative margins that offset the column padding to maintain proper alignment
 *
 * Props:
 * - children: Column components or other React nodes
 * - className: Additional CSS classes for custom styling
 * - noGutters: When true, removes the spacing between columns
 */

interface RowProps {
    children: React.ReactNode;
    className?: string;
    noGutters?: boolean;
}
declare const Row: FC<RowProps>;

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
declare const Col: FC<ColProps>;

export { Col, Container, Row };
