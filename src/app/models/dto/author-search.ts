export class AuthorSearch {
  numFound!: number; // So lugng tim thãy
  start!: number; // Index phân tür däu tiên
  numFoundExact!: boolean;
  docs!: DocAboutAuthor[];
}

export class DocAboutAuthor{
  key!: string;
  type!: string;
  name!: string;
  alternate_names!: string[];
  birth_date!: string;
  death_date!: string;
  top_work!: string;
  work_count!: number;
  top_subjects!: string[];
  _version_!: number;
}
