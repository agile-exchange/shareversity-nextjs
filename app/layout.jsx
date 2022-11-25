import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import SupabaseListener from "../components/supabase-listener";
import createClient from "../utils/supabase-server";
export const revalidate = 0;
import "server-only";

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <body>
        <div className={styles.navbar}>
          <Link className={styles.navitem} href="/">
            Home
          </Link>

          <Link className={styles.navitem} href="/posts">
            Create Post
          </Link>

          <Link className={styles.navitem} href="/feed">
            Job Opportunities
          </Link>

          {session ? (
            <Link className={styles.profile} href="/profile">
              Profile
            </Link>
          ) : (
            <div className={styles.loginSignup}>
              <Link className={styles.login} href="/login">
                Login
              </Link>{" "}
              {" | "}
              <Link className={styles.login} href="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
        <SupabaseListener accessToken={session?.access_token} />
        {children}

        {/* <SessionContextProvider supabaseClient={supabaseClient}> */}
        {/* <Component {...pageProps} /> */}
        {/* initialSession={pageProps.intitalsession} */}
        {/* </SessionContextProvider> */}
      </body>
    </html>
  );
}
