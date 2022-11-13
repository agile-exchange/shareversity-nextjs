import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function ClientSide() {
  // change any to the actual type of data. Did <any> temporarily to get it working
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      console.log({ data, error });
      setLoading(false);
      setData(data);
    };
    getData();
  }, []);

  return loading ?(<><p>loading...</p></>):(
    <div>
      <h1>Client Side</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
