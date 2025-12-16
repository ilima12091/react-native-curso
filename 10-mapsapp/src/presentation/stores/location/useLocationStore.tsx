import { create } from 'zustand';
import { Location } from '../../../infrastructure/interfaces/location';
import {
  clearLocationWatch,
  getCurrentLocation,
  watchCurrentLocation,
} from '../../../actions/location/location';

interface LocationState {
  lastKnownLocation: Location | null;
  userLocationsHistory: Location[];
  watchId?: number;
  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocationsHistory: [],
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnownLocation: location });
    return location;
  },
  watchLocation: () => {
    const watchId = get().watchId;

    if (watchId) {
      get().clearWatchLocation();
    }

    const id = watchCurrentLocation(location => {
      set(state => ({
        lastKnownLocation: location,
        userLocationsHistory: [...state.userLocationsHistory, location],
      }));
    });

    set({ watchId: id });
  },
  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId) {
      clearLocationWatch(watchId);
    }
  },
}));
