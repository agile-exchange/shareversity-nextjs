import styles from "../page.module.css";
export default function Header() {
  return (
    <>
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
    </>
  );
}
