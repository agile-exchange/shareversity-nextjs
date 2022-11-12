'use client'
import "./globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function RootLayout({
  children,
  Component,
  pageProps,
}: AppProps<{
  children: React.ReactNode;
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider> */}
      <body>{children}</body>
    </html>
  );
}

// function MyApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   initialSession: Session;
// }>) {
//   const [supabaseClient] = useState(() => createBrowserSupabaseClient());

//   return (
//     <SessionContextProvider
//       supabaseClient={supabaseClient}
//       initialSession={pageProps.initialSession}
//     >
//       <Component {...pageProps} />
//     </SessionContextProvider>
//   );
// }


