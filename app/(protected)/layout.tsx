import Header from "@/components/header";

import '../../app/globals.css'

export default function ProtectedPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div>
        <Header />
      </div>
      <div className="flex flex-row ">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
