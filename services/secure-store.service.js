import * as SecureStore from 'expo-secure-store';

export const SecureStoreService = {
  save: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  get: async (key) => await SecureStore.getItemAsync(key),
  delete: async (key) => await SecureStore.deleteItemAsync(key),
};
