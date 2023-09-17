import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const Reveal = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible:{opacity: 1}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1.5}}
            >
                {children}
            </motion.div>
        </div>
    )
}