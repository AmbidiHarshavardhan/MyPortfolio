import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
      />
      <h2 className="text-cyan-400 text-2xl mt-6 animate-pulse">
        Get Ready to Explore Harsha's Profile!
      </h2>
    </div>
  );
}
