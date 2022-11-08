export interface Firma {
  title: string;
  logo: string;
  noLogo: string;
  adres: string[];
  type?: FirmType;
}

export enum FirmType {
  finansy = 1,
  it,
}
