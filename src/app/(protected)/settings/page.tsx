import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
}
