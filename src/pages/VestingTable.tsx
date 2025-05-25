import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const VestingTable = () => {
  const vestingData = [
    { period: "TGE", date: "Launch", gameplayRewards: "1,000,000,000", communityIncentives: "250,000,000", developmentFund: "0", liquidity: "1,000,000,000", status: "Released" },
    { period: "TGE+6M", date: "Month 6", gameplayRewards: "500,000,000", communityIncentives: "0", developmentFund: "0", liquidity: "0", status: "Released" },
    { period: "TGE+12M", date: "Month 12", gameplayRewards: "500,000,000", communityIncentives: "250,000,000", developmentFund: "0", liquidity: "0", status: "Pending" },
    { period: "TGE+16M", date: "Month 16", gameplayRewards: "0", communityIncentives: "0", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+18M", date: "Month 18", gameplayRewards: "500,000,000", communityIncentives: "0", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+24M", date: "Month 24", gameplayRewards: "500,000,000", communityIncentives: "250,000,000", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+30M", date: "Month 30", gameplayRewards: "500,000,000", communityIncentives: "0", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+36M", date: "Month 36", gameplayRewards: "500,000,000", communityIncentives: "250,000,000", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+42M", date: "Month 42", gameplayRewards: "500,000,000", communityIncentives: "0", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+48M", date: "Month 48", gameplayRewards: "500,000,000", communityIncentives: "250,000,000", developmentFund: "40,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+54M", date: "Month 54", gameplayRewards: "500,000,000", communityIncentives: "0", developmentFund: "5,000,000", liquidity: "0", status: "Pending" },
    { period: "TGE+59M", date: "Month 59", gameplayRewards: "500,000,000", communityIncentives: "250,000,000", developmentFund: "0", liquidity: "0", status: "Pending" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Released":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30 font-mono">RELEASED</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 hover:bg-yellow-500/30 font-mono">PENDING</Badge>;
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
        <CardTitle className="text-2xl font-bold text-green-400 font-mono">DISTRIBUTION SCHEDULE</CardTitle>
        <CardDescription className="text-gray-300 font-mono">
          Detailed breakdown of token distribution across categories
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 bg-gray-900">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800/50 border-b border-green-500/30">
                <TableHead className="font-semibold text-green-400 font-mono">PERIOD</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">DATE</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">GAMEPLAY REWARDS</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">COMMUNITY</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">DEVELOPMENT</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">LIQUIDITY</TableHead>
                <TableHead className="font-semibold text-green-400 font-mono">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vestingData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-700/50"
                >
                  <TableCell className="font-medium text-green-300 font-mono">{row.period}</TableCell>
                  <TableCell className="text-gray-300 font-mono">{row.date}</TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">{formatTokens(row.gameplayRewards)}</TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">{formatTokens(row.communityIncentives)}</TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">{formatTokens(row.developmentFund)}</TableCell>
                  <TableCell className="font-mono text-green-400 font-semibold">{formatTokens(row.liquidity)}</TableCell>
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
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <div className="text-sm text-gray-400 font-mono">GAMEPLAY REWARDS</div>
              <div className="text-xl font-bold text-green-400 font-mono">60%</div>
              <div className="text-sm text-gray-300 font-mono">6,000,000,000</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <div className="text-sm text-gray-400 font-mono">COMMUNITY</div>
              <div className="text-xl font-bold text-green-400 font-mono">15%</div>
              <div className="text-sm text-gray-300 font-mono">1,500,000,000</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <div className="text-sm text-gray-400 font-mono">DEVELOPMENT</div>
              <div className="text-xl font-bold text-green-400 font-mono">15%</div>
              <div className="text-sm text-gray-300 font-mono">1,500,000,000</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <div className="text-sm text-gray-400 font-mono">LIQUIDITY</div>
              <div className="text-xl font-bold text-green-400 font-mono">10%</div>
              <div className="text-sm text-gray-300 font-mono">1,000,000,000</div>
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default VestingTable;