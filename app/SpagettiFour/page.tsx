"use client";
// här är en funktion som heter search
function Search() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        {/* Text med Search */}
        <span className="ml-4">SEARCH</span>
      </div>
      {/* En förinställd text där det står search */}
      <input placeholder="Search" />
    </div> // detta bryter mot "Only comment things that have business logic complexity.
    // kommentarer hör enbart hemma i koden om dem förklarar något som inte är självklart för läsaren
  );
}

export default Search();
