/**
 * Provides Photo Interface.
 */
export interface Photo {
  readonly uuid: string;
  readonly title: string;
  readonly description: string;
  readonly src: string;
  readonly tags: string[];
}
