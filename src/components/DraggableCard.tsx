"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DraggableCardProps {
    children: ReactNode;
    className?: string;
    initial?: any;
    animate?: any;
    transition?: any;
    style?: React.CSSProperties;
}

export const DraggableCard = ({ children, className, initial, animate, transition, style }: DraggableCardProps) => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 500 }}
            whileHover={{ scale: 1.1, cursor: "grab", zIndex: 100 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            style={{ position: 'absolute', ...style }}
        >
            {children}
        </motion.div>
    );
};
