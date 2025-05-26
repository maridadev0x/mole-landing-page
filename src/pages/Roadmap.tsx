import { CheckCircle, Circle, Clock, Rocket, Shield, Coins, Users, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const roadmapData = [
  {
    quarter: "Q2 2024: Project Foundation",
    status: "completed",
    items: [
      {
        title: "",
        description: "Launch Mole Smash’s official community channels and branding.",
        icon: Rocket,
        completed: true
      },
      {
        title: "",
        description: "Begin token distribution through airdrops to engage early adopters.",
        icon: Coins,
        completed: true
      }
    ]
  },
  {
    quarter: "Q3 2024: Beta Game Launch",
    status: "completed",
    items: [
      {
        title: "",
        description: "Release the beta version of Mole Smash for community testing and feedback.",
        icon: Users,
        completed: true
      },
      {
        title: "",
        description: "Introduce limited-time events and exclusive in-game rewards.",
        icon: Clock,
        completed: true
      }
    ]
  },
  {
    quarter: "Q1 2025: Full Game Launch",
    status: "completed",
    items: [
      {
        title: "",
        description: "Launch the full version of Mole Smash with expanded features and enhanced gameplay.",
        icon: Users,
        completed: true
      },
      {
        title: "",
        description: "Collaborate with influencers and gaming communities to boost adoption.",
        icon: Globe,
        completed: true
      }
    ]
  },
  {
    quarter: "Q2 2025: DeFi Integration",
    status: "upcoming",
    items: [
      {
        title: "",
        description: "Integrate DeFi elements such as staking and yield farming for MOLE tokens.",
        icon: Shield,
        completed: false
      },
      {
        title: "",
        description: "Launch in-game marketplaces for tokenized assets and NFTs.",
        icon: Rocket,
        completed: false
      }
    ]
  },
  {
    quarter: "Q3 2025: Cross-Platform Expansion",
    status: "upcoming",
    items: [
      {
        title: "",
        description: "IIntroduce Mole Smash to other platforms, including mobile and desktop apps.",
        icon: Shield,
        completed: false
      },
      {
        title: "",
        description: "Expand the player base to 1 million active users globally.",
        icon: Coins,
        completed: false
      }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-blue-700";
    case "in-progress":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="completed" className="bg-white-500/70 text-blue-500 border-blue-500/70">Completed</Badge>;
    case "in-progress":
      return <Badge className="bg-white-500/70 text-yellow-400 border-yellow-500/30">In Progress</Badge>;
    default:
      return <Badge variant="upcoming" className="bg-white-500/70 text-gray-500 border-gray-500/50">Upcoming</Badge>;
  }
};

export const Roadmap = () => {
  return (
    <div className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Mole Smash is committed to delivering a high-quality gaming experience with a strategic and phased approach
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-5 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 hidden md:block" />

          <div className="space-y-16">
            {roadmapData.map((quarter, quarterIndex) => (
              <div key={quarterIndex} className="relative">
                {/* Quarter marker */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-full ${getStatusColor(quarter.status)} flex items-center justify-center shadow-lg hidden md:flex`}>
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-2xl font-bold text-black mb-2">{quarter.quarter}</h3>
                    {getStatusBadge(quarter.status)}
                  </div>
                </div>

                {/* Quarter items */}
                <div className="md:ml-24 grid gap-6 md:grid-cols-2">
                  {quarter.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/60 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${
                          item.completed 
                            ? 'from-green-500 to-emerald-500' 
                            : 'from-purple-500 to-blue-500'
                        } shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        {item.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-black-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};