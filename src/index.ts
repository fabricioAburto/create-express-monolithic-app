#!/usr/bin/env node
import { AppCreator } from './app-builder';
import DatabaseFactory from './steps/index';
import ExpressStepCommand from './steps/express';

const getMetadata = async () => {
  let express = await ExpressStepCommand.new().execute();
  const configs = await DatabaseFactory.execute(express.wantDatabase);
  return { ...express, ...configs };
};

(async () => {
  const answers = await getMetadata();
  console.log(answers);
  AppCreator.create(answers).catch(console.error);
})();
