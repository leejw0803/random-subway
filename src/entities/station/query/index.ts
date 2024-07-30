import { useCallback, useEffect, useState } from 'react';

import { StationTypes, StationApi } from '..';

export const useStations = (lines: NumberString[]) => {
  const [stations, setStations] = useState<StationTypes.Station[]>([]);

  const getData = useCallback(async () => {
    const data = await StationApi.fetchStations(lines);
    setStations(data);
  }, [lines]);

  useEffect(() => {
    getData();
  }, [getData]);

  return stations;
};
