"use client";
// price.tsx
import { useState } from "react";

export default function Price() {
  const [user, setUser] = useState<string | null>(null);

  const updateUser = (newUser: string) => {
    setUser(newUser);
  };

  return (
    <main>
      <h1 className="flex justify-center">Spaghetti one</h1>
      <button onClick={() => updateUser("New User")}>Set User</button>
      <p>User: {user}</p>
    </main>
  );
}
