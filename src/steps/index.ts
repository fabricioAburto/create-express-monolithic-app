import {
  MongoPrefixer,
  MysqlPrefixer,
  RedisPrefixer,
  PersistanceType,
} from '../types/connections';
import DbStepCommand from './database';

export default class DatabaseFactory {
  static async execute(type?: PersistanceType) {
    if (type === 'mongodb') {
      return await DbStepCommand.new<MongoPrefixer>().execute('mongodb');
    } else if (type === 'mysql') {
      return await DbStepCommand.new<MysqlPrefixer>().execute('mysql');
    } else if (type === 'redis') {
      return await DbStepCommand.new<RedisPrefixer>().execute('redis');
    }
  }
}
