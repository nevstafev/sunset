import { SunsetResponse, SunsetData, SunsetResponseData } from "./types";

const mapResponseData = ({
  sunrise,
  sunset,
  solar_noon,
  day_length,
  civil_twilight_begin,
  civil_twilight_end,
  nautical_twilight_begin,
  nautical_twilight_end,
  astronomical_twilight_begin,
  astronomical_twilight_end,
}: SunsetResponseData): SunsetData => {
  return {
    solar_noon,
    day_length,
    sunrise: new Date(sunrise),
    sunset: new Date(sunset),
    civil_twilight_begin: new Date(civil_twilight_begin),
    civil_twilight_end: new Date(civil_twilight_end),
    nautical_twilight_begin: new Date(nautical_twilight_begin),
    nautical_twilight_end: new Date(nautical_twilight_end),
    astronomical_twilight_begin: new Date(astronomical_twilight_begin),
    astronomical_twilight_end: new Date(astronomical_twilight_end),
  };
};

export const getSunsetData = async (
  position: Position
): Promise<SunsetData> => {
  const latitude = position?.coords.latitude;
  const longitude = position?.coords.longitude;

  if (!latitude || !longitude) {
    throw new Error("Coordinates is not specified.");
  }

  const response = await fetch(
    `https://api.sunrise-sunset.org/json?formatted=0&lat=${latitude}&lng=${position?.coords.longitude}`
  );
  const sunsetResponse = (await response.json()) as SunsetResponse;

  if (sunsetResponse.status !== "OK") {
    throw new Error(
      "Error while getting data from api. Error: " + sunsetResponse.status
    );
  }

  return mapResponseData(sunsetResponse.results);
};
