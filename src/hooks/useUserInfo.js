"use client";

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { 
  getTraineeIdFromStorage, 
  storeTraineeId, 
  normalizeTraineeData,
  extractTraineeId,
  isValidTraineeId 
} from '@/lib/traineeUtils';

const USER_INFO_KEY = 'userInfo';

// Helper function to get initial data from localStorage
const getInitialUserData = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const data = localStorage.getItem('data');
    const traineeId = getTraineeIdFromStorage();
    
    if (data) {
      const parsed = JSON.parse(data);
      const normalizedData = normalizeTraineeData({
        ...parsed,
        traineeId: traineeId || extractTraineeId(parsed)
      });
      return normalizedData;
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return null;
};

// Helper function to sync with localStorage
const syncWithLocalStorage = (data) => {
  if (typeof window === 'undefined') return;
  
  try {
    if (data) {
      const normalizedData = normalizeTraineeData(data);
      localStorage.setItem('data', JSON.stringify(normalizedData));
      
      const traineeId = extractTraineeId(normalizedData);
      if (isValidTraineeId(traineeId)) {
        storeTraineeId(traineeId);
      }
    } else {
      localStorage.removeItem('data');
      localStorage.removeItem('traineeId');
    }
  } catch (error) {
    console.error('Error syncing with localStorage:', error);
  }
};

export const useUserInfo = () => {
  const queryClient = useQueryClient();

  // Query to get user info
  const query = useQuery({
    queryKey: [USER_INFO_KEY],
    queryFn: () => getInitialUserData(),
    staleTime: Infinity, // Never stale unless manually invalidated
    gcTime: 1000 * 60 * 60 * 24, // 24 hours (renamed from cacheTime)
  });

  // Mutation to update user info
  const updateMutation = useMutation({
    mutationFn: (newData) => {
      const currentData = queryClient.getQueryData([USER_INFO_KEY]) || {};
      const updatedData = { ...currentData, ...newData };
      syncWithLocalStorage(updatedData);
      return updatedData;
    },
    onSuccess: (updatedData) => {
      queryClient.setQueryData([USER_INFO_KEY], updatedData);
    },
  });

  // Mutation to clear user info
  const clearMutation = useMutation({
    mutationFn: () => {
      syncWithLocalStorage(null);
      return null;
    },
    onSuccess: () => {
      queryClient.setQueryData([USER_INFO_KEY], null);
    },
  });

  return {
    // Data
    userInfo: query.data,
    isLoading: query.isLoading,
    error: query.error,
    
    // Actions
    updateUserInfo: (data) => updateMutation.mutate(data),
    clearUserInfo: () => clearMutation.mutate(),
    
    // Mutation states
    isUpdating: updateMutation.isPending,
    updateError: updateMutation.error,
    
    // Utilities
    getTraineeId: useCallback(() => {
      const data = query.data;
      return extractTraineeId(data);
    }, [query.data]),
    
    // Refresh from localStorage (useful if data was updated externally)
    refresh: useCallback(() => queryClient.invalidateQueries({ queryKey: [USER_INFO_KEY] }), [queryClient]),
    
    // Check if user has any data stored
    hasUserData: useCallback(() => !!query.data, [query.data]),
  };
};

// Hook for specific form data management
export const useFormData = (formType) => {
  const { userInfo, updateUserInfo, isUpdating } = useUserInfo();
  
  const getFormData = () => {
    if (!userInfo) return {};
    
    switch (formType) {
      case 'personal':
        return {
          fullname: userInfo.fullname || '',
          registrationno: userInfo.registrationno || '',
          email: userInfo.email || '',
          phone: userInfo.phone || '',
          gender: userInfo.gender || '',
          traineeId: extractTraineeId(userInfo),
        };
      
      case 'bank':
        return {
          bank_name: userInfo.bank_name || '',
          account_number: userInfo.account_number || '',
          account_name: userInfo.account_name || '',
          bvn: userInfo.bvn || '',
          traineeId: extractTraineeId(userInfo),
        };
      
      case 'internship':
        return {
          has_started_internship: userInfo.has_started_internship || false,
          internship_letter_url: userInfo.internship_letter_url || '',
          has_completed_internship: userInfo.has_completed_internship || false,
          completion_letter_url: userInfo.completion_letter_url || '',
          state_of_internship: userInfo.state_of_internship || '',
          LGA_of_internship: userInfo.LGA_of_internship || '',
        };
      
      default:
        return userInfo || {};
    }
  };
  
  const updateFormData = (formData) => {
    updateUserInfo(formData);
  };
  
  return {
    formData: getFormData(),
    updateFormData,
    isUpdating,
  };
};