import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setTable: Dispatch<SetStateAction<string>>;
  table: string;
}

export const Header = ({ setTable, table }: HeaderProps) => {
  const handleClick = (table: string) => {
    setTable(table);
    localStorage.setItem("table", table);
  };
  return (
    <header className="flex justify-center mb-4">
      <div className="flex gap-0.5 justify-center bg-gray-300 p-2 rounded">
        <button
          className={`py-1 px-4 rounded ${
            table === "top" ? "bg-white shadow-sm" : "bg-transparent"
          }`}
          onClick={() => handleClick("top")}
        >
          Top 100
        </button>
        <button
          className={`py-1 px-4 rounded ${
            table === "watchlist" ? "bg-white shadow-sm" : "bg-transparent"
          }`}
          onClick={() => handleClick("watchlist")}
        >
          Watchlist
        </button>
      </div>
    </header>
  );
};
