import "../globals.css";
import styles from "../page.module.css";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav >
      <a  href="/">Home</a> | <a href="/posts">Post</a>
      {children}
    </nav>
  );
}
