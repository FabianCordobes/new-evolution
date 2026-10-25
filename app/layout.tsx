import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'New Evolution | Estrategia, producción y tecnología', description: 'Comunicación, producción de experiencias y desarrollo tecnológico para desafíos reales de marcas, empresas y organizaciones.', robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-AR"><body>{children}</body></html>; }
