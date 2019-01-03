import { PROJECTS } from '../fixtures';
import { Project } from '../interfaces';

/**
 * Get projects.
 */
export const getProjects = async (): Promise<ReadonlyArray<Project>> => {

  return await PROJECTS;

};

/**
 * Get project by uuid.
 */
export const getProjectByUuid = async (uuid: string): Promise<Readonly<Project>> => {

  return await PROJECTS.find(p => p.uuid === uuid);

};
