import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anoop Wilson | Full Stack Web Developer Portfolio",
  description: "Passionate Full Stack Web Developer proficient in MERN stack. Showcase of dynamic, user-friendly projects including 'Fill Your Tummy (FYT)', a food-ordering application, built with modern tools like React.js, Node.js, Tailwind CSS, Redux, and Razorpay. Skilled in clean architecture, responsive design, and integrating advanced features for better user experience. Dedicated learner with a proven track record of building practical and scalable solutions.",
  keywords: "Full Stack Developer, MERN Stack Developer, React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Anoop Wilson, Portfolio, Web Development, Food Ordering Application, Modern Web Solutions",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
