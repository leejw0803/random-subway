import { API } from '@/shared';
import { StationTypes } from '..';

export const fetchStations = async (lines: NumberString[]) => {
  const key = '$2a$10$Vz19/5vR.n.wc87tfRH5gexSKu4qw.zGYMUyx/UMICtlFzfrriLDi';
  let resultStations: StationTypes.Station[] = [];

  for (const line of lines) {
    const response = await API.fetchData<StationTypes.FetchStationsResponse>(
      `https://openapi.kric.go.kr/openapi/trainUseInfo/subwayRouteInfo?serviceKey=${key}&format=json&mreaWideCd=01&lnCd=${line}`
    );
    resultStations = [...resultStations, ...response.body];
  }

  return resultStations;
};
