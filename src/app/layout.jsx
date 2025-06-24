import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Browse Artists | Artistly",
  description: "Find performers for your next event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <main className="min-h-screen bg-[#DBE2EF]">{children}</main>
      </body>
    </html>
  );
}
