import { motion } from "framer-motion";
const FloatingTag = ({ icon, label, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.4, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-white/50 bg-white/90 backdrop-blur-xl px-3 py-2 shadow-xl dark:border-neutral-700 dark:bg-neutral-900/90 ${className}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
        {label}
      </span>
    </motion.div>
  );
};

export default FloatingTag;
