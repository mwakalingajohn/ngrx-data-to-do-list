import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todos: {},
};

const pluralNames = {
  Todos: 'Todos'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
