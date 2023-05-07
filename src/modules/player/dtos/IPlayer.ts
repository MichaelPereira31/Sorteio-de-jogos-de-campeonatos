import { Document } from 'mongoose';

export interface IPlayer extends Document {
  name: string;
  photo: string;
  height: string;
  weight: string;
  age: number;
  position: string;
  number: number;
}
