import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description: "Connect event planners with performing artists.",
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
