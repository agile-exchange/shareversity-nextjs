import supabase from "../../utils/supabase-browser";

export default function Protected({user}) {
    console.log(user)
  return (
    <>
      <h1>Protected</h1>
    </>
  );
}

export async function getData({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return { props: {}, redirect: { destination: "/login" } };
  }
  return { props: { user } };
}
