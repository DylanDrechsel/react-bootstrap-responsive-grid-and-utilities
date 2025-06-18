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
}
export declare const Row: FC<RowProps>;
export {};
