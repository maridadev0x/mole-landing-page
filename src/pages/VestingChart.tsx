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
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useState } from "react";
import { vestingData, tokenCategories } from "./vestingConfig";

const VestingChart = () => {
  const chartData = vestingData.reduce((acc, entry, index) => {
    const parseTokens = (value: string) => parseInt(value.replace(/,/g, ''));

    const gameplayRewards = parseTokens(entry.gameplayRewards);
    const communityIncentives = parseTokens(entry.communityIncentives);
    const developmentFund = parseTokens(entry.developmentFund);
    const liquidity = parseTokens(entry.liquidity);

    // Calculate cumulative values
    const prevEntry = index > 0 ? acc[index - 1] : {
      gameplayRewards: 0,
      communityIncentives: 0,
      developmentFund: 0,
      liquidity: 0,
      total: 0
    };

    const cumulativeGameplayRewards = prevEntry.gameplayRewards + gameplayRewards;
    const cumulativeCommunityIncentives = prevEntry.communityIncentives + communityIncentives;
    const cumulativeDevelopmentFund = prevEntry.developmentFund + developmentFund;
    const cumulativeLiquidity = prevEntry.liquidity + liquidity;

    acc.push({
      month: entry.period,
      gameplayRewards: cumulativeGameplayRewards,
      communityIncentives: cumulativeCommunityIncentives,
      developmentFund: cumulativeDevelopmentFund,
      liquidity: cumulativeLiquidity,
      total: cumulativeGameplayRewards + cumulativeCommunityIncentives + cumulativeDevelopmentFund + cumulativeLiquidity
    });

    return acc;
  }, [] as Array<{
    month: string;
    gameplayRewards: number;
    communityIncentives: number;
    developmentFund: number;
    liquidity: number;
    total: number;
  }>);

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
                  {`${tokenCategories[item.dataKey].label}: ${(
                      item.value / 1000000000
                    ).toFixed(2)}B`}
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
            {opened ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
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
                  <stop offset="5%" stopColor={tokenCategories.gameplayRewards.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={tokenCategories.gameplayRewards.color} stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="communityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={tokenCategories.communityIncentives.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={tokenCategories.communityIncentives.color} stopOpacity={0.1} />
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
                  <stop offset="5%" stopColor={tokenCategories.liquidity.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={tokenCategories.liquidity.color} stopOpacity={0.1} />
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
                stroke={tokenCategories.gameplayRewards.color}
                fill="url(#gameplayGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="communityIncentives"
                stackId="1"
                stroke={tokenCategories.communityIncentives.color}
                fill="url(#communityGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="developmentFund"
                stackId="1"
                stroke={tokenCategories.developmentFund.color}
                fill="url(#developmentGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="liquidity"
                stackId="1"
                stroke={tokenCategories.liquidity.color}
                fill="url(#liquidityGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {
            Object.entries(tokenCategories).map(([key, category]) => (
              <div key={key} className="flex items-center space-x-3" >
                <div
                  className="w-4 h-4 rounded border"
                  style={{
                    backgroundColor: category.color,
                    borderColor: category.color + '80'
                  }}
                > </div>
                < span className="text-gray-300 font-medium font-mono text-sm" > {category.label} </span>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default VestingChart;
