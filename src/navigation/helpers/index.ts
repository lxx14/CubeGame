import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params = {}): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
