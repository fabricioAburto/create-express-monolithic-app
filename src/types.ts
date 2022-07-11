export type Configurations = {
  name: string;
  port?: number;
  docker?: boolean;
  templateEngine?: 'hbs' | 'html' | 'none';
  database?: 'mysql' | 'mongodb';
};

export type Profiler = {
  NAME: string;
  PORT?: number;
  DOCKER?: boolean;
  TEMPLATE_ENGINE?: 'hbs' | 'html' | 'none';
  DATABASE?: 'mysql' | 'mongodb' | 'none';
};
