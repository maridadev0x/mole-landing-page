import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useState } from "react";

import { vestingData, tokenCategories } from "./vestingConfig";

const VestingTable = () => {
  const [opened, setOpened] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Released":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30 font-mono">
            RELEASED
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 hover:bg-yellow-500/30 font-mono">
            PENDING
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatTokens = (tokens: string) => {
    if (tokens === "0") return "-";
    return tokens;
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
              DISTRIBUTION SCHEDULE
            </CardTitle>
            <CardDescription className="text-gray-300 font-mono">
              Detailed breakdown of token distribution across categories
            </CardDescription>
          </div>
          <div className="text-green-400">
            {opened ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
          </div>
        </div>
      </CardHeader>
      <CardContent className={`overflow-y-hidden transition-all duration-300 ${opened ? '' : 'hidden'} p-0 bg-gray-900`}>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800/50 border-b border-green-500/30">
                <TableHead className="font-semibold text-green-400 font-mono">
                  PERIOD
                </TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">
                  GAMEPLAY REWARDS
                </TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">
                  COMMUNITY INCENTIVES
                </TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">
                  DEVELOPMENT FUND & INVESTOR
                </TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">
                  LIQUIDITY
                </TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">
                  STATUS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vestingData.map((row, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-700/50"
                >
                  <TableCell className="font-medium text-green-300 font-mono">
                    {row.period}
                  </TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">
                    {formatTokens(row.gameplayRewards)}
                  </TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">
                    {formatTokens(row.communityIncentives)}
                  </TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">
                    {formatTokens(row.developmentFund)}
                  </TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">
                    {formatTokens(row.liquidity)}
                  </TableCell>
                  <TableCell>{getStatusBadge(row.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Summary Section */}
        {/* <div className="p-6 bg-gray-800/50 border-t border-green-500/30">
          <h3 className="text-lg font-bold text-green-400 font-mono mb-4">DISTRIBUTION SUMMARY</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(tokenCategories).map(([key, category]) => (
              <div key={key} className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                <div className="text-sm text-gray-400 font-mono">{category.label}</div>
                <div className="text-xl font-bold text-green-400 font-mono">{category.percentage}</div>
                <div className="text-sm text-gray-300 font-mono">{category.total}</div>
              </div>
            ))}
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default VestingTable;
