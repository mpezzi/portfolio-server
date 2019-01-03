import { PHOTOS } from '../fixtures';
import { Photo } from '../interfaces';

/**
 * Get photos.
 */
export const getPhotos = async (): Promise<ReadonlyArray<Photo>> => {

  return await PHOTOS;

};

/**
 * Get photo by uuid.
 */
export const getPhotoByUuid = async (uuid: string): Promise<Readonly<Photo>> => {

  return await PHOTOS.find(p => p.uuid === uuid);

};
