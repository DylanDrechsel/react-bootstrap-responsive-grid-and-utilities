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

import { type FC } from "react";

interface RowProps {
    children: React.ReactNode;
    className?: string;
    noGutters?: boolean;
};

export const Row: FC<RowProps> = ({
    children,
    className = '',
    noGutters = false
}) => {
    // Apply no-gutters class to remove spacing between columns if requested
    const rowClass = noGutters ? 'row no-gutters' : 'row';

    return (
        <div className={`${rowClass} ${className}`}>
            {children}
        </div>
    );
};