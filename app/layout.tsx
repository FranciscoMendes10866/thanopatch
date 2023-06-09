import "./globals.css";

export const metadata = {
  title: "Today's tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen bg-neutral`}>
        <section className="container mx-auto p-4">{children}</section>
      </body>
    </html>
  );
}
