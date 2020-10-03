import { FeatureType, Document, DocumentType } from 'src/types';

export const document: Document = {
  id: 'document-1',
  type: DocumentType.MEDICAL_HISTORY,
  features: {
    'flag-1': {
      id: 'flag-1',
      type: FeatureType.FOLLOW_UP,
      humanName: 'Follow up',
      meta: {
        top: 40,
        left: 90,
      },
    },
    'flag-2': {
      id: 'flag-2',
      type: FeatureType.HEART_FAILURE,
      humanName: 'Heart failure',
      meta: {
        top: 80,
        left: 20,
      },
    },
    'medication-1': {
      id: 'medication-1',
      type: FeatureType.ASPIRIN,
      humanName: 'Aspirin',
      meta: {
        top: 67,
        left: 20,
      },
    },
    'problem-1': {
      id: 'problem-1',
      type: FeatureType.GERD,
      humanName: 'Acid reflux',
      meta: {
        top: 30,
        left: 55,
      },
    },
    'problem-2': {
      id: 'problem-2',
      type: FeatureType.SLEEP_APNEA,
      humanName: 'Sleep apnea',
      meta: {
        top: 44,
        left: 60,
      },
    },
    'allergy-1': {
      id: 'allergy-1',
      type: FeatureType.PENICILLIN,
      humanName: 'Penicillin',
      meta: {
        top: 53,
        left: 81,
      },
    },
  },
  pages: [
    {
      id: 'page-1',
      pageAssetUrl: '/img01.jpg',
      flags: ['flag-1', 'flag-2'],
    },
    {
      id: 'page-2',
      pageAssetUrl: '/img02.jpg',
      medications: ['medication-1'],
    },
    {
      id: 'page-3',
      pageAssetUrl: '/img03.jpg',
      problems: ['problem-1', 'problem-2'],
      allergies: ['allergy-1'],
    },
  ],
};
