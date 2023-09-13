export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="w-full h-16 border-b bg-secondary px-4 py-2">
      {children}
    </header>
  );
}
