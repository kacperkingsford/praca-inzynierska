export interface HelpOffer {
  id: number;
  name: string;
  description: string;
  city: string;
  street: string;
  number: number;
  postCode: string;
  imagePath: string;
  imageFileName: string;
  reservedByUserId: number;
}
