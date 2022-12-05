export const revalidate = 0;
export const dynamic = "force-dynamic";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import SupabaseListener from "../components/supabase-listener";
import createClient from "../utils/supabase-server";
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

          <Link className={styles.navitem} href="/profile-search">
            Search Profiles
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
      </body>
    </html>
  );
}
