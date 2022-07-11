import { Configurations, Profiler } from './types';
export declare class AppCreator {
    static create(configs: Configurations): Promise<void>;
    static renameFile(filename: string, oldName: string, newName: string): void;
    static template(filename: string, profiler: Profiler): void;
    static getProfiler(configs: Configurations): Profiler;
}
