import { useEffect, useState } from "react";


export default function ClientSide() {
  const { user } = useSession();
const [data, setData] = useState(null);
  return (
    <div>
      <h1>Client Side</h1>
      <p>
        This page uses the <code>useSession</code> hook to fetch the current
        session from the browser.
      </p>
      <p>
        <strong>Session:</strong> {JSON.stringify(user)}
      </p>
    </div>
  );
}