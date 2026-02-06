"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DraggableCardProps {
    children: ReactNode;
    className?: string;
    initial?: { x: number; y: number; rotate: number };
}

export const DraggableCard = ({ children, className, initial = { x: 0, y: 0, rotate: 0 } }: DraggableCardProps) => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
            whileHover={{ scale: 1.1, cursor: "grab", zIndex: 50 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            initial={initial}
            className={className}
            style={{ position: 'relative' }} // Changed from absolute to allow mixed layouts, or handled by parent
        >
            {children}
        </motion.div>
    );
};
