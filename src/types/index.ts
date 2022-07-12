import { PersistanceType } from './connections';

export type ExpressConfigs = {
  NAME: string;
  AUTHOR?: string;
  EXPRESS_PORT?: number;
  wantDatabase?: PersistanceType;
};
