import { CreatedTime } from './created-time';

export class AuthorDetails {
  name?: string;
  personal_name?: string;
  death_date?: string;
  alternate_names?: string[];
  created?: CreatedTime;
  last_modified?: CreatedTime;
  latest_revision?: number;
  key?: string;
  birth_date?: string;
  revision?: number;
  type?: string;
  remote_ids?: RemoteIDS; // Có thê bó qua
}

class RemoteIDS {
  viaf?: string;
  wikidata?: string;
  isni?: string;
}
