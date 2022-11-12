import "../globals.css";
export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <a href="/">Home</a> | <a href="/posts">Post</a>
      {children}
    </section>
  );
}
