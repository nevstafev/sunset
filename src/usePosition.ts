import { useEffect, useState } from "react";

export default function usePosition() {
  const [position, setPosition] = useState<Position>();
  useEffect(() => {
    const geo = navigator.geolocation;

    geo.getCurrentPosition((currentLocation) => {
      setPosition(currentLocation);
    });
  }, []);

  return [position];
}
