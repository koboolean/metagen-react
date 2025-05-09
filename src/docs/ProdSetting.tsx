import {motion} from "framer-motion";
import Title from "../comp/Title.tsx";

export default function ProdSetting(){

    return <>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-gray-800"
        >
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
                <Title title={"운영 관리"}/>

            </div>
        </motion.div>
    </>
}
