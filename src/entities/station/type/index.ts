export type Station = {
  lnCd: NumberString;
  mreaWideCd: string;
  railOprIsttCd: string;
  routCd: NumberString;
  routNm: string;
  stinCd: string;
  stinConsOrdr: number;
  stinNm: string;
};

export type FetchStationsResponse = {
  body: Station[];
};
