import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle  } from "react-icons/io";
import { useState } from "react";

const VestingChart = () => {
  const chartData = [
    {
      month: "TGE",
      gameplayRewards: 500000000,
      communityIncentives: 250000000,
      developmentFund: 0,
      liquidity: 250000000,
      total: 1000000000,
    },
    {
      month: "TGE+6M",
      gameplayRewards: 1000000000,
      communityIncentives: 500000000,
      developmentFund: 0,
      liquidity: 500000000,
      total: 1000000000,
    },
    {
      month: "TGE+12M",
      gameplayRewards: 1500000000,
      communityIncentives: 500000000,
      developmentFund: 0,
      liquidity: 750000000,
      total: 3000000000,
    },
    {
      month: "TGE+16M",
      gameplayRewards: 1500000000,
      communityIncentives: 750000000,
      developmentFund: 40000000,
      liquidity: 750000000,
      total: 3040000000,
    },
    {
      month: "TGE+18M",
      gameplayRewards: 2000000000,
      communityIncentives: 750000000,
      developmentFund: 120000000,
      liquidity: 750000000,
      total: 3620000000,
    },
    {
      month: "TGE+24M",
      gameplayRewards: 2500000000,
      communityIncentives: 1000000000,
      developmentFund: 360000000,
      liquidity: 1000000000,
      total: 4860000000,
    },
    {
      month: "TGE+30M",
      gameplayRewards: 3000000000,
      communityIncentives: 1000000000,
      developmentFund: 600000000,
      liquidity: 1000000000,
      total: 5600000000,
    },
    {
      month: "TGE+36M",
      gameplayRewards: 3500000000,
      communityIncentives: 1250000000,
      developmentFund: 840000000,
      liquidity: 1250000000,
      total: 6590000000,
    },
    {
      month: "TGE+42M",
      gameplayRewards: 4500000000,
      communityIncentives: 1250000000,
      developmentFund: 1080000000,
      liquidity: 1250000000,
      total: 7830000000,
    },
    {
      month: "TGE+48M",
      gameplayRewards: 5000000000,
      communityIncentives: 1500000000,
      developmentFund: 1320000000,
      liquidity: 1500000000,
      total: 8820000000,
    },
    {
      month: "TGE+54M",
      gameplayRewards: 5500000000,
      communityIncentives: 1500000000,
      developmentFund: 1490000000,
      liquidity: 1500000000,
      total: 9490000000,
    },
    {
      month: "TGE+59M",
      gameplayRewards: 6000000000,
      communityIncentives: 1500000000,
      developmentFund: 1500000000,
      liquidity: 1500000000,
      total: 10000000000,
    },
  ];

  const [opened, setOpened] = useState(false);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const totalData = payload.find((item: any) => item.dataKey === "total");

      return (
        <div className="bg-gray-900 p-4 shadow-lg border-green-500/50 backdrop-blur-sm">
          <p className="font-semibold text-green-400 font-mono">{`PERIOD: ${label}`}</p>
          {totalData && (
            <p className="text-green-300 font-mono">
              {`TOTAL RELEASED: ${(totalData.value / 1000000000).toFixed(1)}B`}
            </p>
          )}
          <div className="mt-2 space-y-1">
            {payload
              .filter((item: any) => item.dataKey !== "total")
              .map((item: any, index: number) => (
                <p key={index} className="text-gray-300 font-mono text-sm">
                  {`${item.dataKey
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}: ${(
                    item.value / 1000000000
                  ).toFixed(1)}B`}
                </p>
              ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-2xl bg-gray-900/90 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-green-500/30">
        <div
          onClick={() => setOpened((prev) => !prev)}
          className="flex justify-between items-center"
        >
          <div className="">
            <CardTitle className="text-2xl font-bold text-green-400 font-mono">
              TOKEN RELEASE VISUALIZATION
            </CardTitle>
            <CardDescription className="text-gray-300 font-mono">
              Real-time token distribution across all categories
            </CardDescription>
          </div>
          <div className="text-green-400">
            {opened ? <IoMdArrowDropupCircle  /> : <IoMdArrowDropdownCircle />}
          </div>
        </div>
      </CardHeader>
      <CardContent className={`px-6 bg-gray-900 overflow-y-hidden transition-all duration-300 ${opened ? '' : 'hidden'}`}>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="gameplayGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="communityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#34D399" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="developmentGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#6EE7B7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6EE7B7" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="liquidityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#A7F3D0" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#A7F3D0" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="month"
                stroke="#9CA3AF"
                fontSize={12}
                tickLine={false}
                className="font-mono"
              />
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${(value / 1000000000).toFixed(0)}B`}
                label={{
                  value: "TOKENS (BILLIONS)",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "#9CA3AF", fontFamily: "monospace" },
                }}
                className="font-mono"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="gameplayRewards"
                stackId="1"
                stroke="#10B981"
                fill="url(#gameplayGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="communityIncentives"
                stackId="1"
                stroke="#34D399"
                fill="url(#communityGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="developmentFund"
                stackId="1"
                stroke="#6EE7B7"
                fill="url(#developmentGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="liquidity"
                stackId="1"
                stroke="#A7F3D0"
                fill="url(#liquidityGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded border border-green-400"></div>
            <span className="text-gray-300 font-medium font-mono text-sm">
              GAMEPLAY REWARDS
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-400 rounded border border-green-300"></div>
            <span className="text-gray-300 font-medium font-mono text-sm">
              COMMUNITY INCENTIVES
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-300 rounded border border-green-200"></div>
            <span className="text-gray-300 font-medium font-mono text-sm">
              DEVELOPMENT FUND & INVESTOR
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-200 rounded border border-green-100"></div>
            <span className="text-gray-300 font-medium font-mono text-sm">
              LIQUIDITY
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VestingChart;
