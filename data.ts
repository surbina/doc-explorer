import {
  DocumentType,
  FlagTypes,
  MedicationType,
  ProblemTypes,
  AllergiesTypes,
  Document,
} from 'src/types';

export const document: Document = {
  id: 'document-1',
  type: DocumentType.MEDICAL_HISTORY,
  pages: [
    {
      id: 'page-1',
      pageAssetUrl: '/img01.jpg',
      flags: [
        {
          id: 'flag-1',
          type: FlagTypes.FOLLOW_UP,
          humanName: 'Follow up',
          meta: {
            top: 40,
            left: 90,
          },
        },
        {
          id: 'flag-2',
          type: FlagTypes.HEART_FAILURE,
          humanName: 'Heart failure',
          meta: {
            top: 80,
            left: 20,
          },
        },
      ],
    },
    {
      id: 'page-2',
      pageAssetUrl: '/img02.jpg',
      medications: [
        {
          id: 'medication-1',
          type: MedicationType.ASPIRIN,
          humanName: 'Aspirin',
          meta: {
            top: 67,
            left: 20,
          },
        },
      ],
    },
    {
      id: 'page-3',
      pageAssetUrl: '/img03.jpg',
      problems: [
        {
          id: 'problem-1',
          type: ProblemTypes.GERD,
          humanName: 'Acid reflux',
          meta: {
            top: 30,
            left: 55,
          },
        },
        {
          id: 'problem-2',
          type: ProblemTypes.SLEEP_APNEA,
          humanName: 'Sleep apnea',
          meta: {
            top: 44,
            left: 60,
          },
        },
      ],
      allergies: [
        {
          id: 'allergy-1',
          type: AllergiesTypes.PENICILLIN,
          humanName: 'Penicillin',
          meta: {
            top: 53,
            left: 81,
          },
        },
      ],
    },
  ],
};
