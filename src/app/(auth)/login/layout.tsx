export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full flex items-center justify-center">
      {children}
    </main>
  );
}
