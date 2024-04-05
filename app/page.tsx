// Home.js
"use client";
// Home.tsx
import { useEffect } from "react";
import MyButton from "./SpagettiTwo/page";

interface User {
  name: string;
  loadUser(): void;
}

export default function Home() {
  class UserImp implements User {
    //  Bryter mot "Avoid contractions" Skriv inte förkortningar som förvirrar.
    name: string;

    // bryter mot SRP eller singe responsibility principen som säger att en construktor inte får utföra arbete. Vilket den gör genom att anropa metoden loadUser.
    // För att lösa detta kan man flytta anropet av metoden utanför constructorn.

    constructor(name: string) {
      this.name = name;
      this.loadUser();
    }

    loadUser() {}
  }

  useEffect(() => {
    const user: User = new UserImp("Philip");
    console.log(user.name);
  });

  return (
    <main>
      <h2>Spagetti five</h2>
      <MyButton />
    </main>
  );
}
