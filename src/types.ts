export enum DocumentType {
  MEDICAL_HISTORY = 'MEDICAL_HISTORY',
}

export enum FeatureType {
  FOLLOW_UP = 'PrimaryCareProvider/FollowUp',
  HEART_FAILURE = 'CardiacFaliure/Symptoms',
  SLEEP_APNEA = 'SleepApnea',
  GERD = 'GERD',
  PENICILLIN = 'Penicillin',
  ASPIRIN = 'Aspirin',
}

export enum FeaturesGroup {
  FLAG = 'FLAG',
  PROBLEM = 'PROBLEM',
  ALLERGY = 'ALLERGY',
  MEDICATION = 'MEDICATION',
}

export const FeatureMap = {
  [FeatureType.FOLLOW_UP]: FeaturesGroup.FLAG,
  [FeatureType.HEART_FAILURE]: FeaturesGroup.FLAG,
  [FeatureType.GERD]: FeaturesGroup.PROBLEM,
  [FeatureType.SLEEP_APNEA]: FeaturesGroup.PROBLEM,
  [FeatureType.PENICILLIN]: FeaturesGroup.ALLERGY,
  [FeatureType.ASPIRIN]: FeaturesGroup.MEDICATION,
};

export interface Feature {
  id: string;
  type: FeatureType;
  humanName: string;
  meta: {
    top: number;
    left: number;
  };
}

export interface Page {
  id: string;
  pageAssetUrl: string;
  flags?: Array<string>;
  medications?: Array<string>;
  problems?: Array<string>;
  allergies?: Array<string>;
}

export interface Document {
  id: string;
  type: DocumentType;
  pages: Array<Page>;
  features: Record<string, Feature>;
}

export interface DocumentState {
  selectedFeature: string | null;
  pendingReviewFeatures: Array<string>;
  completedFeatures: Array<string>;
}

export enum DocumentStateActionTypes {
  SELECT_FEATURE = 'SELECT_FEATURE',
  CONFIRM_FEATURE = 'CONFIRM_FEATURE',
  UNCONFIRM_FEATURE = 'UNCONFIRM_FEATURE',
  REMOVE_FEATURE = 'REMOVE_FEATURE',
}

export type DocumentStateAction =
  | {
      type: DocumentStateActionTypes.SELECT_FEATURE;
      id: string;
    }
  | {
      type: DocumentStateActionTypes.CONFIRM_FEATURE;
      id: string;
    }
  | {
      type: DocumentStateActionTypes.UNCONFIRM_FEATURE;
      id: string;
    }
  | {
      type: DocumentStateActionTypes.REMOVE_FEATURE;
      id: string;
    };

export type DocumentStateDispatch = (action: DocumentStateAction) => void;
