/**
 * Provides Project Interface.
 */
export interface Project {
  readonly uuid: string;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
}
