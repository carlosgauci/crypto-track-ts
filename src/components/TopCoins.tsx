import { Row } from "./Row";
import { useEffect, useState } from "react";
import axios from "axios";
import { Coin } from "../types";

export const TopCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            price_change_percentage: "24h",
          },
        }
      );

      setCoins(response.data);
    };

    fetchData();
  }, []);

  console.log(coins);

  return (
    <ul className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
      {coins.map((c) => (
        <Row key={c.id} coin={c} />
      ))}
    </ul>
  );
};
