import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Studio - IRONONE",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
