import { Model } from "sequelize/types";

export type NewContactInPatchType = {
  name?: string;
  email?: string;
};

export interface IContactModel extends Model {
  uuid: string;
  name: string;
  email: string;
}