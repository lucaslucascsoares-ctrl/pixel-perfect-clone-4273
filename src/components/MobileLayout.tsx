import { ReactNode } from "react";

const MobileLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen items-start justify-center bg-muted p-4">
    <div className="w-full max-w-[420px] min-h-[700px] bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {children}
    </div>
  </div>
);

export default MobileLayout;
