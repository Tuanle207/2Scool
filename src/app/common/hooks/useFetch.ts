import { useReducer, useEffect, useRef, useMemo } from 'react';
import { ResBody, Util } from '../interfaces';
import { cleanObject } from '../utils/ObjectHelper';

enum FetchState {
  Fetching = 'fetching',
  Fetched = 'fetched',
  Error = 'error',
  Idle = 'idle',
  Reset = 'reset'
}

interface FetchDataState {
  status: FetchState;
  error?: string;
  loading: boolean;
  reset: number; // 0: default 1: true -1: false
  data: ResBody.PagingModel<any>;
}

interface ReturnType {
  error?: string;
  loading: boolean;
  data: ResBody.PagingModel<any>;
  resetCache: () => void;
}

const initialState: FetchDataState = {
  status: FetchState.Idle,
  error: undefined,
  loading: false,
  reset: 0,
  data: {
    items: [],
    pageIndex: 1,
    totalCount: 0,
    pageSize: 0
  },
};

/**
 * 
 * @param fetchFunction a function used for calling API
 * @param input an object used as request input: params, body, ...
 */
export default function (fetchFunction: Function, input: Util.IObject): ReturnType {
  // TODO: Sort input key-value following alphabet order for fully utilize cache
  const cacheKey = JSON.stringify(input);
  const cache = useRef<Util.IObject>({});

  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case FetchState.Fetching: 
        return { ...initialState, status: FetchState.Fetching, loading: true };
      case FetchState.Fetched:
        return { ...initialState, status: FetchState.Fetched, data: action.payload, loading: false };
      case FetchState.Error:
        return { ...initialState, status: FetchState.Error, error: action.payload, loading: false };
      case FetchState.Reset:
        return { ...initialState, status: FetchState.Reset, reset: action.payload, loading: false }
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    //TODO: fix error request 2 continual time
    const fetchData = async () => {
      dispatch({ type: FetchState.Fetching });
      if (cache.current[cacheKey]) {
        const data = cache.current[cacheKey];
        dispatch({ type: FetchState.Fetched, payload: data });
      } else {
        try {
          const response = await fetchFunction(input);
          cache.current[cacheKey] = response;
          if (cancelRequest) return;
          dispatch({ type: FetchState.Fetched, payload: response });
            
        } catch (error) {
          console.log('error fetching', {error});
          if (cancelRequest) return;
          dispatch({ type: FetchState.Error, payload: error.message });
        }
      }
    };

    console.log({cacheKey, reset: state.reset});
    let cancelRequest = false;
    
    console.log({state});
    
    if (!cacheKey) return;
    
    if (state.reset === 0 || state.reset === 1) {
      // dispatch({ type: FetchState.Reset, payload: false });
      // return;
      fetchData();
    }
    

    return () => {
      cancelRequest = true;
    };
  }, [ cacheKey, state.reset ]);

  const resetCache = () => {
    cleanObject(cache.current);
    dispatch({ type: FetchState.Reset, payload: 1 });
  };

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    resetCache: resetCache
  };
}