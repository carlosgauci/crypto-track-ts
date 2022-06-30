import { Header } from "./components/Header";
import { useState } from "react";
import { TableHeader } from "./components/TableHeader";
import { TopCoins } from "./components/TopCoins";
import { Watchlist } from "./components/Watchlist";

function App() {
  const [table, setTable] = useState(localStorage.getItem("table") || "top");

  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );

  return (
    <div className="h-screen max-h-screen container max-w-6xl overflow-hidden flex flex-col">
      <div className="bg-gray-50 rounded my-4 sm:my-10 md:my-14 p-2 sm:p-4 md:p-8 pt-4 overflow-hidden flex flex-col h-full">
        <Header setTable={setTable} table={table} />
        <main className="overflow-hidden flex flex-col">
          <TableHeader />
          {table === "top" ? (
            <TopCoins />
          ) : (
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
