import StreamVideoProvider from "@/providers/stream-client-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
