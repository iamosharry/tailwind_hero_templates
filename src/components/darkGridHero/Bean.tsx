import { motion } from "framer-motion";

interface Transtype {
  duration: number;
  repeatDelay: number;
  delay: number;
}
interface Props {
  top: number;
  left: number;
  transition: Transtype[] | {};
}
const Beam = ({ top, left, transition }: Props) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};
export default Beam;
