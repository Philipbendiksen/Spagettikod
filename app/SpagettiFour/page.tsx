"use client";

export function calculateTotal(items: number[]) {
  let total = 0;
  let i;
  let len = items.length;
  for (i = 0; i < len; i++) {
    total += items[i];
  }
  return total;
}

export default function About() {
  const items = [10, 20, 30]; // Exempel på en array med nummer

  const total = calculateTotal(items); // Anropa funktionen calculateTotal och spara resultatet i en variabel

  return (
    <main className="flex justify-center">
      <h2>Spagetti Four</h2>
      <p>Total: {total}</p>
    </main>
  );
}
