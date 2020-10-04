import * as React from 'react';

import { Document, DocumentState, DocumentStateDispatch } from '../types';
import reducer from './reducer';

const StateContext = React.createContext<DocumentState>(null);
const DispatchContext = React.createContext<DocumentStateDispatch>(null);

export function useDocumentState() {
  const context = React.useContext(StateContext);

  if (!context) {
    throw new Error(
      'useDocumentState must be used within a DocumentStateProvider'
    );
  }

  return context;
}

export function useDocumentDispatch() {
  const context = React.useContext(DispatchContext);

  if (!context) {
    throw new Error(
      'useDocumentDispatch must be used within a DocumentStateProvider'
    );
  }

  return context;
}

function getInitialState(document: Document): DocumentState {
  return {
    selectedFeature: null,
    hoveredFeature: null,
    pendingReviewFeatures: Object.keys(document.features),
    completedFeatures: [],
    showBanner: null,
    showOutline: false, // this will be used on low resolution devices only
  };
}

interface DocumentStateProviderProps {
  document: Document;
  children: React.ReactNode;
}

export function DocumentStateProvider({
  document,
  children,
}: DocumentStateProviderProps) {
  const [state, dispatch] = React.useReducer(
    reducer,
    document,
    getInitialState
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}
