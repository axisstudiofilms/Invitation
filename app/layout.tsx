import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./premium.css";
import "./flagship.css";
import "./ivory.css";
import {siteUrl} from "@/lib/seo";

export const metadata: Metadata = {
 metadataBase:new URL(siteUrl),
 title:{default:'Axis Invitation — Nepali Digital Wedding Invitations',template:'%s | Axis Invitation'},
 description:'Create a premium Nepali or English wedding invitation with family details, photographs, music and a beautiful shareable website. By Axis Studio, Kathmandu.',
 applicationName:'Axis Invitation',
 robots:{index:true,follow:true},
 icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

