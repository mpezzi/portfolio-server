import { TAGS } from '../fixtures';
import { Tag } from '../interfaces';

/**
 * Get tags.
 */
export const getTags = async (): Promise<ReadonlyArray<Tag>> => {

  return await TAGS;

};

/**
 * Get tags by uuids.
 */
export const getTagsByUuids = async (uuids: string[]): Promise<ReadonlyArray<Tag>> => {

  return await TAGS.filter(t => uuids.includes(t.uuid));

}

/**
 * Get tag by uuid.
 */
export const getTagByUuid = async (uuid: string): Promise<Readonly<Tag>> => {

  return await TAGS.find(t => t.uuid === uuid);

};
