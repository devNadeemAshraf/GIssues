import Header from "@/components/header/header";
import GetIssue from "@/components/header/tabs/get-issue";
import MyIssues from "@/components/header/tabs/my-issues";
import OrgIssues from "@/components/header/tabs/org-issues";
import RepoIssues from "@/components/header/tabs/repo-issues";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const tab_list = [
    {
      key: "myIssues",
      value: "myIssues",
      title: "My Assigned Issues",
      content: <MyIssues />,
    },
    {
      key: "orgIssues",
      value: "orgIssues",
      title: "Organization Assigned Issues",
      content: <OrgIssues />,
    },
    {
      key: "repoIssues",
      value: "repoIssues",
      title: "Repository Issues",
      content: <RepoIssues />,
    },
    {
      key: "getIssue",
      value: "getIssue",
      title: "Get an Issue",
      content: <GetIssue />,
    },
  ];

  return (
    <main className="w-full h-full flex flex-col items-center justify-start pt-16">
      <Tabs className="w-full" defaultValue={tab_list[0].value}>
        <Header>
          <TabsList>
            {tab_list.map((tab_item) => {
              return (
                <TabsTrigger value={tab_item.value} key={tab_item.key}>
                  {tab_item.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Header>
        {tab_list.map((tab_item) => {
          return (
            <TabsContent value={tab_item.value} key={tab_item.key}>
              {tab_item.content}
            </TabsContent>
          );
        })}
      </Tabs>
    </main>
  );
}
