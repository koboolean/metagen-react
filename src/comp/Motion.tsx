import {ReactNode, useEffect, useState} from "react";
import { motion } from 'framer-motion';

type MotionType = {
    children : ReactNode,
    id : string
}

export default function Motion({children, id} : MotionType){

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShouldAnimate(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return <>
        {shouldAnimate && (
            <motion.section
                id={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-gray-800"
            >
                {children}
            </motion.section>
        )}
    </>
}
