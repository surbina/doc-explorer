import {
  DocumentState,
  DocumentStateAction,
  DocumentStateActionTypes,
} from '../types';

function reducer(
  state: DocumentState,
  action: DocumentStateAction
): DocumentState {
  switch (action.type) {
    case DocumentStateActionTypes.SELECT_FEATURE: {
      return {
        ...state,
        selectedFeature: action.id,
      };
    }

    case DocumentStateActionTypes.CONFIRM_FEATURE: {
      return {
        ...state,
        selectedFeature: null,
        pendingReviewFeatures: state.pendingReviewFeatures.filter(
          (featureId) => featureId !== action.id
        ),
        completedFeatures: [...state.completedFeatures, action.id],
      };
    }

    case DocumentStateActionTypes.UNCONFIRM_FEATURE: {
      return {
        ...state,
        selectedFeature: null,
        pendingReviewFeatures: [...state.pendingReviewFeatures, action.id],
        completedFeatures: state.completedFeatures.filter(
          (featureId) => featureId !== action.id
        ),
      };
    }

    case DocumentStateActionTypes.REMOVE_FEATURE: {
      return {
        ...state,
        selectedFeature:
          state.selectedFeature === action.id ? null : state.selectedFeature,
        pendingReviewFeatures: state.pendingReviewFeatures.filter(
          (featureId) => featureId !== action.id
        ),
        completedFeatures: state.pendingReviewFeatures.filter(
          (featureId) => featureId !== action.id
        ),
      };
    }

    case DocumentStateActionTypes.HOVER_FEATURE: {
      return {
        ...state,
        hoveredFeature: action.id,
      };
    }

    default:
      throw new Error('Invalid Document State Action');
  }
}

export default reducer;
