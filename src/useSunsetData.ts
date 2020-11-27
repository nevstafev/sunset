import { useEffect, useState } from "react";
import { getSunsetData } from "./api";
import { SunsetData } from "./types";
import usePosition from "./usePosition";

export default function useSunsetData(): [
  SunsetData | undefined,
  boolean,
  Position | undefined
] {
  const [data, setData] = useState<SunsetData>();
  const [isFetched, setFetched] = useState(false);
  const [position] = usePosition();

  async function fetchSunTime(currentLocation: Position) {
    try {
      setFetched(true);

      const sunsetData = await getSunsetData(currentLocation);

      setData(sunsetData);
    } finally {
      setFetched(false);
    }
  }

  useEffect(() => {
    if (!position) {
      return;
    }
    fetchSunTime(position);
  }, [position]);

  return [data, isFetched, position];
}
