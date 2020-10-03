import { NextApiRequest, NextApiResponse } from 'next';
import {
  DocumentType,
  FlagTypes,
  MedicationType,
  ProblemTypes,
  AllergiesTypes,
} from 'src/types';

const document = {
  id: '1',
  type: DocumentType.MEDICAL_HISTORY,
  pages: [
    {
      id: '1',
      pageAssetUrl: '/public/img01.jpg',
      flags: [
        {
          id: '1',
          type: FlagTypes.FOLLOW_UP,
          humanName: 'Follow up',
          meta: {
            top: '40',
            left: '90',
          },
        },
        {
          id: '2',
          type: FlagTypes.HEART_FAILURE,
          humanName: 'Heart failure',
          meta: {
            top: '80',
            left: '20',
          },
        },
      ],
    },
    {
      id: '2',
      pageAssetUrl: '/public/img02.jpg',
      medications: [
        {
          id: '1',
          type: MedicationType.ASPIRIN,
          humanName: 'Aspirin',
          meta: {
            top: '67',
            left: '20',
          },
        },
      ],
    },
    {
      id: '3',
      pageAssetUrl: '/public/img03.jpg',
      problems: [
        {
          id: '1',
          type: ProblemTypes.GERD,
          humanName: 'Acid reflux',
          meta: {
            top: '30',
            left: '55',
          },
        },
        {
          id: '2',
          type: ProblemTypes.SLEEP_APNEA,
          humanName: 'Sleep apnea',
          meta: {
            top: '44',
            left: '60',
          },
        },
      ],
      allergies: [
        {
          id: '1',
          type: AllergiesTypes.PENICILLIN,
          humanName: 'Penicillin',
          meta: {
            top: '53',
            left: '81',
          },
        },
      ],
    },
  ],
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json(document);
}

export default handler;
