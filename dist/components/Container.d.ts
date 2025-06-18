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
import { type FC } from "react";
interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const Container: FC<ContainerProps>;
export {};
