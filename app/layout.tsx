import "./globals.css";

export const metadata = {
  title: "Gamy Pedidos",
  description: "Generador de órdenes de envío",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
