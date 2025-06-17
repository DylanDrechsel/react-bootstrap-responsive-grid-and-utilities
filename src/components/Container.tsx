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
    children: React.ReactNode; // Accepts anything that React is capable of rendering as its children (HTML Elements, Strings, Numbers, etc...)
    className?: string;
};

export const Container: FC<ContainerProps> = ({
    fluid = false,
    children,
    className = ''
}) => {
    // Choose between fixed-width container (with responsive max-widths) or fluid container (full-width)
    const containerClass = fluid ? 'container-fluid' : 'container';

    return (
        <div className={`${containerClass} ${className}`}>
            {children}
        </div>
    );
};