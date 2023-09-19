import { Links } from './links';
import { WorksEntry } from './works-entry';

export class AuthorWorks {
  links?: Links;
  size!: number; // Size cúa trang
  entries!: WorksEntry[]; // Data các tác phâm
}
