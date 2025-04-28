import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white text-center p-6 space-y-6">
      
      {/* Spinner */}
      <Loader2 className="animate-spin text-cyan-400" size={60} />

      {/* Welcome Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Get Ready to Explore Harsha's Profile!
      </h1>

      {/* Subtext */}
      <p className="text-md sm:text-lg md:text-xl text-gray-400">
        Loading your personalized experience...
      </p>

    </div>
  );
}
