import "./globals.css";

export const metadata = {
  title: "Vivy AI",
  description:
    "Hyper-realistic AI music generation with mission-based progression.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen theme-light">{children}</body>
    </html>
  );
}
