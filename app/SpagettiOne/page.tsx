"use client";

import { useState } from "react";

export default function UserSetting() {
  const [user, setUser] = useState<string | null>(null);

  // Här bryts principen "Avoid Side Effects" vilket framförallt är kopplat till den bestämda tiden, som försvårar underhåll av koden.

  const updateUser = (newUser: string) => {
    setTimeout(() => {
      if (newUser !== user) {
        setUser(newUser);
      }
    }, 1500);
  };

  return (
    <main>
      <h1 className="flex justify-center">Spaghetti one</h1>
      <button onClick={() => updateUser("New User")}>New User</button>
    </main>
  );
}
