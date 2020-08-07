export type SunsetData = {
  sunrise: Date;
  sunset: Date;
  solar_noon: string;
  day_length: string;
  civil_twilight_begin: Date;
  civil_twilight_end: Date;
  nautical_twilight_begin: Date;
  nautical_twilight_end: Date;
  astronomical_twilight_begin: Date;
  astronomical_twilight_end: Date;
};

export type SunsetResponse = {
  status: string;
  results: SunsetResponseData;
};

export type SunsetResponseData = {
  sunrise: string;
  sunset: string;
  solar_noon: string;
  day_length: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
};
