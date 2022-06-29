export const TableHeader = () => {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 place-items-center bg-gray-200 border p-3 rounded font-semibold">
      <li className="flex gap-8 w-full">
        <span>Rank</span>
        <span className="w-full ">Coin</span>
      </li>
      <li>Price</li>
      <li>Change {"(24h)"}</li>
      <li className="hidden sm:block">Volume {"(24h)"}</li>
      <li className="hidden md:block">Market Cap</li>
    </ul>
  );
};
