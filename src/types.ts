export type Coin = {
    id: string;
    name: string;
    image: string;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    market_cap: number;
    total_volume: number;
    current_price:number;
    symbol:string
  };

export type SearchCoin = {
    id: string;
    name: string;
    symbol:string
    thumb?: string;
    image?: string;
    market_cap_rank: number;
  };