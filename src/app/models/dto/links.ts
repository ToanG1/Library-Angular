import { CreatedTime } from './created-time';
import { Author } from './author';

export class Links {
  links?: Links;
  size?: number; // Size cúa trang
  entries?: WorksEntry[]; // Data các tác phâm
}

class WorksEntry {
  type?: string;
  title?: string;
  subjects?: string[]; // Chuyên ngành cúa tác phâm
  subject_people?: string[];
  authors?: Author[];
  key?: string;
  latest_revision?: number;
  revision?: number;
  created?: CreatedTime;
  last_modified?: CreatedTime;
}
