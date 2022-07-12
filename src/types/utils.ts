export type MappedProfile<Type> = {
    [Property in keyof Type as `${Uppercase<string & Property>}`]?: Type[Property];
};


export interface Command {
      execute(type: string ): Promise<any>;
}
  