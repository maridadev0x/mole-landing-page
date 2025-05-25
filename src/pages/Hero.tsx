import { Calendar, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black to-green-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
            TOKEN VESTING
          </h1>
          <div className="text-2xl md:text-3xl font-mono text-green-400 tracking-wider">
            SCHEDULE
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
            Decentralized token distribution protocol with automated smart contract execution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:bg-gray-800/50">
              <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-green-400 font-mono">SCHEDULED RELEASES</h3>
              <p className="text-gray-300 text-sm font-mono">Automated token distribution via smart contracts</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:bg-gray-800/50">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-green-400 font-mono">GROWTH ALIGNED</h3>
              <p className="text-gray-300 text-sm font-mono">Incentive structure for long-term value creation</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:bg-gray-800/50">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-green-400 font-mono">SECURE & TRANSPARENT</h3>
              <p className="text-gray-300 text-sm font-mono">Immutable smart contract execution on blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;