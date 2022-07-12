export type PersistanceType =
  | 'mysql'
  | 'redis'
  | 'mongodb'
  | 'none';

export interface Connectable {
  port: number;
  host: string;
  user: string;
  password: string;
  database: string;
}

export type MongoPrefixer = {
    [Property in keyof Connectable as `MONGO_${Uppercase<string & Property>}`]?: Connectable[Property];
};

export type MysqlPrefixer = {
    [Property in keyof Connectable as `MYSQL_${Uppercase<string & Property>}`]?: Connectable[Property];
};

export type RedisPrefixer = {
    [Property in keyof Connectable as `REDIS_${Uppercase<string & Property>}`]?: Connectable[Property];
};
