import { CreatedTime } from './created-time';
import { Author } from './author';

export class WorksEntry {
  type?: string;;
  title?: string;
  subjects?: string[]; // Chuyên ngänh cúa tác pham
  subject_people?: string[];
  authors?: Author[];
  key?: string;
  latest_revision?: number;
  revision?: number;
  created?: CreatedTime;
  last_modified?: CreatedTime;
}
