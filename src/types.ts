export enum DocumentType {
  MEDICAL_HISTORY = 'MEDICAL_HISTORY',
}

export enum FlagTypes {
  FOLLOW_UP = 'PrimaryCareProvider/FollowUp',
  HEART_FAILURE = 'CardiacFaliure/Symptoms',
}

export enum ProblemTypes {
  SLEEP_APNEA = 'SleepApnea',
  GERD = 'GERD',
}

export enum AllergiesTypes {
  PENICILLIN = 'Penicillin',
}

export enum MedicationType {
  ASPIRIN = 'Aspirin',
}

export interface Feature<T> {
  id: string;
  type: T;
  humanName: string;
  meta: {
    top: number;
    left: number;
  };
}

export interface Page {
  id: string;
  pageAssetUrl: string;
  flags?: Array<Feature<FlagTypes>>;
  medications?: Array<Feature<MedicationType>>;
  problems?: Array<Feature<ProblemTypes>>;
  allergies?: Array<Feature<AllergiesTypes>>;
}

export interface Document {
  id: string;
  type: DocumentType;
  pages: Array<Page>;
}
