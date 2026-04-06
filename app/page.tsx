import { getData } from "./getData";

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
