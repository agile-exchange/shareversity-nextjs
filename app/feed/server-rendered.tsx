import supabase from "../../utils/supabase";

async function getData() {
  // add error handling later
  // here we are getting all the data from the posts table
  const { data } = await supabase.from("posts").select("*");
  return { data };
}

export default async function SSR() {
  const { data } = await getData();
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
