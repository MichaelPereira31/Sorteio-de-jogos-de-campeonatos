import { Document } from 'mongoose';

export interface ITeam extends Document {
  userId: string;
  name: string;
  city: string;
  trainer: string;
  site: string;
  nameLogo: string;
  srcLogo: string;
}
