import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type POSTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class POST {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<POST, POSTMetaData>);
  static copyOf(source: POST, mutator: (draft: MutableModel<POST, POSTMetaData>) => MutableModel<POST, POSTMetaData> | void): POST;
}