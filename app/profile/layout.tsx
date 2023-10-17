import { Metadata } from "next";
import Header from '../shared/Header';
import { Separator } from "@/components/ui/separator";


export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
}


interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div>
      <Header />
      <div className="space-y-6 p-10 pb-16">
        <div>{children}</div>
      </div>
    </div>

  )
}