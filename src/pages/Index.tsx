import { useState, useEffect } from "react";
import GameButton from "@/components/GameButton";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Roadmap } from "./Roadmap";
import VestingChart from "./VestingChart";
import VestingTable from "./VestingTable";
import {
  Play,
  Star,
  Trophy,
  Clock,
  Users,
  Smartphone,
  MessageCircle,
  Calendar,
  Handshake,
  Rocket,
  Award,
  Gamepad,
  Coins,
  Wallet,
  TrendingUp,
  ChartPie,
  ChartBar,
  WalletCards,
} from "lucide-react";

// Team member type
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Vesting schedule type
interface VestingInfo {
  phase: string;
  percentage: string;
  timeline: string;
  description: string;
  amount: string;
  color: string;
}

// Partner type
interface Partner {
  name: string;
  logo: string;
  type: "Investor" | "Partner";
}

const Index = () => {
  const [showHammer, setShowHammer] = useState(false);
  const [hammerPosition, setHammerPosition] = useState({ x: 0, y: 0 });

  // Random mole pop-ups
  const [activeMoles, setActiveMoles] = useState<number[]>([]);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "John Garner",
      role: "CTO - SoftSix",
      image: "/imgs/molecom.png",
    },
    {
      name: "Tom Gilbert",
      role: "CMO - Alpha Blockchain",
      image: "/imgs/mole1.png",
    },
    {
      name: "TRAN TUAN",
      role: "CEO - CJD Tech",
      image: "/imgs/mole2.png",
    },
  ];

  // Vesting schedule data
  const vestingSchedule: VestingInfo[] = [
    {
      phase: "Gameplay Rewards",
      percentage: "60%",
      amount: "6,000,000,000",
      timeline: "TGE Unlock		",
      description:
        "Allocated to players earning MOLE tokens through in-game achievements and milestones.",
      color: "border-red-500",
    },
    {
      phase: "Community Incentives",
      percentage: "15%",
      amount: "1,500,000,000",
      timeline: "TGE Unlock	",
      description:
        "Supports community growth through events, contests, and collaborations.",
      color: "border-blue-500",
    },
    {
      phase: "Community and public participants",
      percentage: "15%",
      amount: "1,500,000,000",
      timeline: "TGE (+16M)	",
      description:
        "Ensures ongoing game development, updates, and ecosystem enhancements.",
      color: "border-green-500",
    },
    {
      phase: "Liquidity & Exchange Listings",
      percentage: "10%",
      amount: "1,000,000,000",
      timeline: "TGE Unlock		",
      description:
        "Secures partnerships with centralized and decentralized exchanges for token accessibility.",
      color: "border-yellow-500",
    },
  ];

  // Partners and VCs data
  const partners: Partner[] = [
    {
      name: "milk-alliance",
      logo: "/imgs/milk-alliance.png",
      type: "Partner",
    },
    {
      name: "bnb",
      logo: "/imgs/bnb.png",
      type: "Partner",
    },
    {
      name: "airian",
      logo: "/imgs/airian.png",
      type: "Partner",
    },
    {
      name: "myro",
      logo: "/imgs/myro.png",
      type: "Partner",
    },
    {
      name: "playdapp",
      logo: "/imgs/playdapp.png",
      type: "Partner",
    },
    {
      name: "IronblockVentures",
      logo: "/imgs/ironblock.png",
      type: "Investor",
    },
    {
      name: "Redbrick",
      logo: "/imgs/redbrick.png",
      type: "Investor",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const moleIndex = Math.floor(Math.random() * 6);
      setActiveMoles((prev) => [...prev, moleIndex]);

      setTimeout(() => {
        setActiveMoles((prev) => prev.filter((i) => i !== moleIndex));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (showHammer) {
      setHammerPosition({ x: e.clientX, y: e.clientY });
    }
  };

  // Handles opening the Telegram bot
  const handleOpenTelegram = () => {
    window.open("https://t.me/SmashMoleBot", "_blank");
  };

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      {/* Header Component */}
      <Header />

      {/* Floating Hammer Cursor */}
      {showHammer && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${hammerPosition.x - 40}px`,
            top: `${hammerPosition.y - 40}px`,
            transform: "rotate(-30deg)",
          }}
        >
          <div className="w-20 h-20 bg-amber-800 rounded-b-full transform rotate-45"></div>
        </div>
      )}

      {/* Hero Section - adjusted to account for fixed header */}
      <section className="relative bg-gradient-to-b from-[#f3d2b8]/50 to-[#f1d8c4] overflow-hidden pt-28 sm:pt-40 pb-12 sm:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xm:flex-row items-center justify-between gap-8">
            <div className="w-3/4 xm:w-1/2 text-center xm:text-left">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Coins className="w-8 h-8 text-game-blue mr-2" />
                <span className="bg-game-blue text-white py-1 px-3 rounded-full text-sm">
                  Built on Binance Network
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-game-blue drop-shadow-md">
                $<span className="text-game-blue">MOLE</span>
                <span className="text-game-red">SMASH</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-medium">
                The Binance ecosystem's leading Tap-to-Earn token with
                integrated prediction markets and daily rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GameButton
                  size="lg"
                  color="primary"
                  onClick={handleOpenTelegram}
                  className="animate-bounce-slow"
                >
                  <Wallet className="mr-2 h-5 w-5" /> Play & Earn $MOLE
                </GameButton>
                <GameButton
                  size="lg"
                  color="secondary"
                  onClick={() => window.open("#tokenomics", "_self")}
                >
                  <ChartPie className="mr-2 h-5 w-5" /> View Tokenomics
                </GameButton>
              </div>
            </div>

            <div className="w-3/4 xm:w-1/2 relative h-[200px] xs:h-[300px]">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 xs:gap-4 lg:gap-8">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative">
                    <div className="absolute bottom-0 left-2 lg:left-4 right-2 lg:right-4">
                      <img src="/imgs/pit.png" alt="pit" className="" />
                    </div>
                    {activeMoles.includes(index) && (
                      <div className="absolute bottom-8 left-2 lg:left-3 right-0 flex justify-center">
                        <img
                          src="/imgs/mole.png"
                          alt=""
                          style={{ width: "70%" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute top-0 right-0 -mr-16 -mt-16">
                <div className="text-6xl animate-spin-slow opacity-20">💰</div>
              </div>
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10">
                <div className="text-6xl animate-float opacity-20">💎</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-5xl animate-float opacity-20">
          💰
        </div>
        <div className="absolute bottom-10 right-20 text-5xl animate-float opacity-20 delay-300">
          💎
        </div>
      </section>

      {/* Token Metrics Section */}
      <section className="pt-16 bg-[#f3d2b8]/50" id="tokenomics">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Tokenomics
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 lg:max-w-3xl mx-auto">
            The native utility token powering the MoleSmash ecosystem on Binance
            Network
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-center xs:mx-20 md:mx-20 lg:mx-auto">
            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-blue">
              <div className="flex justify-center mb-4">
                <Coins className="w-12 h-12 text-game-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Total Supply
              </h3>
              <p className="text-3xl font-bold text-center text-game-blue">
                10,000,000,000
              </p>
              <p className="text-gray-600 text-center">$MOLE Tokens</p>
            </div>

            <div className="">
              <img src="/imgs/molemoney.png" alt="" className="" />
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-red">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-game-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Initial Market Cap
              </h3>
              <p className="text-3xl font-bold text-center text-game-red">$0</p>
              <p className="text-gray-600 text-center">Fully Diluted: $10M</p>
            </div>

            <div className="">
              <img src="/imgs/mole5.png" alt="" className="" />
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-green">
              <div className="flex justify-center mb-4">
                <Wallet className="w-12 h-12 text-game-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Token Type</h3>
              <p className="text-3xl font-bold text-center text-game-green">
                BNB
              </p>
              <p className="text-gray-600 text-center">Binance Native Token</p>
            </div>

            <div className="">
              <img src="/imgs/mole4.png" alt="" className="" />
            </div>

            <div className="bg-white p-6 rounded-2xl py-10 shadow-lg border-2 border-game-yellow">
              <div className="flex justify-center mb-4">
                <ChartBar className="w-12 h-12 text-game-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Initial Price
              </h3>
              <p className="text-3xl font-bold text-center text-game-yellow">
                $0
              </p>
              <p className="text-gray-600 text-center">Public Sale Price</p>
            </div>

            <div className="">
              <img src="/imgs/molespace.png" alt="" className="" />
            </div>
          </div>
          {/* 
          <div className="mt-20 mx-auto bg-white/90 p-10 rounded-2xl">
            <h3 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
              Token Allocation Categories
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[15px] sm:text-[18px] ">
              <div className="bg-game-blue text-white px-4 py-4 rounded-full">
                Gameplay Rewards: 60%
              </div>
              <div className="bg-game-red text-white px-4 py-4 rounded-full">
                Community Incentives: 15%
              </div>
              <div className="bg-game-green text-white px-4 py-4 rounded-full">
                "Development Fund & Investor " : 15%
              </div>
              <div className="bg-game-yellow text-black px-4 py-4 rounded-full">
                Liquidity & Exchange Listings: 10%
              </div>
            </div>
          </div> */}
        </div>

        <div className="mt-6">
          <img
            src="/imgs/molevillage.png"
            alt=""
            className="w-screen h-[400px] md:h-[600px]"
          />
        </div>
      </section>

      <section></section>

      {/* Vesting Schedule Section */}
      <section className="pt-24 bg-[#f1d8c4]" id="vesting">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Token Vesting Schedule
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transparent allocation and vesting of our $MOLE token
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vestingSchedule.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg border-2 ${item.color}`}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-game-blue mr-3" />
                  <h3 className="text-xl font-bold">{item.phase}</h3>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-lg">
                    {item.percentage}&nbsp;({item.amount})
                  </span>
                  <span className="text-sm bg-game-blue/10 text-game-blue px-3 py-1 rounded-full">
                    {item.timeline}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container py-20 px-4 rounded-md">
          <VestingChart />
          <VestingTable />
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-16 bg-[#f3d2b8]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Token Utility
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A multi-functional token powering the entire MoleSmash ecosystem
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="In-Game Rewards"
              description="Earn $MOLE tokens by playing the game, completing daily missions, and smashing moles."
            />
            <FeatureCard
              icon={<ChartPie className="w-12 h-12 text-game-red" />}
              title="Prediction Markets"
              description="Use $MOLE tokens to participate in the MOLE Predictor markets and win more tokens."
              color="bg-white"
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12 text-game-green" />}
              title="Staking Rewards"
              description="Stake your $MOLE tokens to earn passive income and unlock premium game features."
            />
            <FeatureCard
              icon={<WalletCards className="w-12 h-12 text-game-yellow" />}
              title="Governance"
              description="Vote on game development decisions and ecosystem proposals using your $MOLE holdings."
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-game-purple" />}
              title="Tournament Entry"
              description="Use $MOLE tokens to enter special tournaments with larger prize pools and rare rewards."
            />
            <FeatureCard
              icon={<Handshake className="w-12 h-12 text-black" />}
              title="Binance Ecosystem Integration"
              description="Seamlessly interact with other Binance ecosystem projects and services using $MOLE."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f1d8c4]" id="team">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Team
            </h2>
            {/* <img src="/imgs/ourteam.jpg" alt="" className="w-16 rounded-xl" /> */}
          </div>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the talented individuals behind MoleSmash
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-game-blue">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and VCs Section */}
      <section className="py-16 bg-[#f3d2b8]/50" id="partners">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Partners & Investors
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Backed by industry leaders and strategic partners
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Partners</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-8">
              {partners
                .filter((p) => p.type === "Partner")
                .map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center aspect-square uppercase"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-24 h-24   mb-4 rounded-full"
                    />
                    <h4 className="font-bold text-center">{partner.name}</h4>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Investors</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-10 xm:gap-20 max-w-[700px] mx-auto">
              {partners
                .filter((p) => p.type === "Investor")
                .map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-12  rounded-2xl shadow-lg flex flex-col items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-32 h-32 mb-4 rounded-md"
                    />
                    <h4 className="font-bold text-center">{partner.name}</h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Features Section - Lower priority now */}
      <section className="bg-[#f1d8c4]" id="features">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 xm:gap-20 px-8 sm:px-12 md:px-20 pt-8 sm:pt-12 md:pt-20">
          <img
            src="/imgs/1.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/2.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/3.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/4.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/5.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/6.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
        </div>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Game Features
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Earn $MOLE tokens while enjoying these exciting game features
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-game-yellow" />}
              title="Dynamic Levels"
              description="Players progress through increasingly challenging stages with unique mole behaviors."
            />
            <FeatureCard
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="Power-Ups"
              description="Special items appear during gameplay, providing advantages to players."
              color="bg-white"
            />
            <FeatureCard
              icon={<Rocket className="w-12 h-12 text-game-red" />}
              title="Leaderboards"
              description=" Weekly and monthly leaderboards keep the competition fierce and engaging. "
            />
            <FeatureCard
              icon={<Award className="w-12 h-12 text-game-green" />}
              title="Customizable Themes"
              description="Players can unlock and personalize their gaming environments. 
"
            />
            {/* <FeatureCard
              icon={<ChartPie className="w-12 h-12 text-game-purple" />}
              title="MOLE Predictor"
              description="Use your tokens in our prediction market to multiply your holdings."
            />
            <FeatureCard
              icon={<MessageCircle className="w-12 h-12 text-black" />}
              title="Referral System"
              description="Invite friends to earn a percentage of their $MOLE token earnings forever."
            /> */}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[#f3d2b8]/50" id="features">
        <div className="container mx-auto px-4 py-16">
          <Roadmap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f3d2b8]">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning $MOLE Tokens?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of players already smashing moles and earning $MOLE
            tokens on Binance Network!
          </p>

          <div className="flex flex-col xl:flex-row gap-6 justify-center mx-6 xs:mx-20 sm:mx-40 xl:mx-auto">
            <GameButton
              size="xl"
              color="primary"
              onClick={handleOpenTelegram}
              className="animate-pulse"
            >
              <Wallet className="mr-2 h-6 w-6" /> Play & Earn Now
            </GameButton>
            <GameButton size="xl" color="accent">
              <ChartPie className="mr-2 h-6 w-6" /> Token Dashboard
            </GameButton>
          </div>

          <div className="mt-12 flex flex-col items-center xl:flex-row justify-center gap-6">
            {/* <div className="flex items-center">
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6" />
              <span className="ml-2 font-bold">4.8/5</span>
              <span className="ml-2 text-gray-500">(1,243 Reviews)</span>
            </div> */}
            <span className="hidden xl:block text-gray-500">|</span>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-game-blue" />
              <span className="font-bold">50K+</span>
              <span className="ml-2">Active Users</span>
            </div>
            <span className="hidden xl:block text-gray-500">|</span>
            <div className="flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-game-yellow" />
              <span className="font-bold">$150K+</span>
              <span className="ml-2">$MOLE Distributed</span>
            </div>
          </div>

          <div className="">
            <img
              src="/imgs/molefriend.png"
              alt=""
              className="absolute -bottom-10 -right-20 hidden xs:block w-56 sm:w-64 xl:w-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Coins className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">
                $<span className="text-white">MOLE</span>
                <span className="text-game-red">SMASH</span>
              </h2>
            </div>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mb-4 md:mb-0">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-300">
                © 2025 MoleSmash. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">About MoleSmash</h3>
              <p className="text-sm text-gray-300">
                MoleSmash is a Binance ecosystem-based crypto-game that combines
                tap-to-earn gameplay with tokenized rewards. Built on The Open
                Network with a focus on prediction markets and community
                engagement.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#tokenomics"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Tokenomics
                </a>
                <a
                  href="#vesting"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Token Vesting
                </a>
                <a
                  href="#partners"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Partners
                </a>
                <a
                  href="https://drive.google.com/file/d/1wuoOcLT33dwRf-_O-BF32wH34665K7iE/view?usp=sharing"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Whitepaper
                </a>
                <a
                  href="#team"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="https://drive.google.com/file/d/1QHywlp_Kzrjmxk9S7B82eCadw7asSBXw/view?usp=sharing"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Audit
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="https://t.me/MoleOfficialchannel" className="">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 text-white bg-white/10"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="200px"
                      width="200px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                    </svg>
                  </Button>
                </a>

                <a href="https://x.com/MoleSmash" className="">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 text-white bg-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
