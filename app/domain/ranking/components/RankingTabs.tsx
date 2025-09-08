import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { tv } from 'tailwind-variants';

type RankingType = 'activity' | 'betRate';

interface RankingTabsProps {
  activeTab: RankingType;
  onTabChange: (tab: RankingType) => void;
  children: React.ReactNode;
}

const { tabsList, tabsTrigger, tabsContent } = tv({
  slots: {
    tabsList: 'w-full bg-[#1E1E1E] h-11',
    tabsTrigger: 'h-9 text-base font-medium transition-colors',
    tabsContent: 'mt-3',
  },
})();

const RankingTabs = ({ activeTab, onTabChange, children }: RankingTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as RankingType)}>
      <TabsList className={tabsList()}>
        <TabsTrigger
          value="activity"
          className={`${tabsTrigger()} data-[state=active]:bg-[#333333] data-[state=inactive]:bg-transparent`}
        >
          활동랭킹
        </TabsTrigger>
        <TabsTrigger
          value="betRate"
          className={`${tabsTrigger()} data-[state=active]:bg-[#333333] data-[state=inactive]:bg-transparent`}
          disabled
        >
          적중랭킹 9/20 오픈
          {/* 적중랭킹 */}
        </TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className={tabsContent()}>
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default RankingTabs;
