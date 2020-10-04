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
  hoveredFeature: string | null;
  pendingReviewFeatures: Array<string>;
  completedFeatures: Array<string>;
  showBanner: FeaturesGroup | null;
  showOutline: boolean;
}

export enum DocumentStateActionTypes {
  SELECT_FEATURE = 'SELECT_FEATURE',
  CONFIRM_FEATURE = 'CONFIRM_FEATURE',
  UNCONFIRM_FEATURE = 'UNCONFIRM_FEATURE',
  REMOVE_FEATURE = 'REMOVE_FEATURE',
  HOVER_FEATURE = 'HOVER_FEATURE',
  SET_OUTLINE_STATE = 'SET_OUTLINE_STATE',
}

export type DocumentStateAction =
  | {
      type: DocumentStateActionTypes.SELECT_FEATURE;
      id: string | null;
      featureGroup: FeaturesGroup | null;
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
    }
  | {
      type: DocumentStateActionTypes.HOVER_FEATURE;
      id: string | null;
    }
  | {
      type: DocumentStateActionTypes.SET_OUTLINE_STATE;
      showOutline: boolean;
    };

export type DocumentStateDispatch = (action: DocumentStateAction) => void;
