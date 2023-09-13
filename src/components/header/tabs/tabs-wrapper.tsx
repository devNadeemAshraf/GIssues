export default function TabsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 py-2 flex flex-col">{children}</div>;
}
