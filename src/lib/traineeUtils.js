import { decrypt } from './cryptoUtil';

/**
 * Standardized utility functions for trainee ID handling
 * Addresses inconsistent field mapping across the application
 */

/**
 * Extract trainee ID from various possible field names
 * @param {Object} data - Object that might contain trainee ID in various field names
 * @returns {string|number|null} - Trainee ID or null if not found
 */
export function extractTraineeId(data) {
  if (!data || typeof data !== 'object') {
    return null;
  }

  // Try different possible field names in order of preference
  const possibleFields = [
    'traineeId',  // Our standardized field name
    'id',         // Most common
    'ID',         // Sometimes uppercase
    'SN',         // Serial Number from database
    'sn',         // Lowercase version
    'trainee_sn', // Alternative database field
    'trainee_id', // Alternative field name
  ];

  for (const field of possibleFields) {
    if (data[field] != null && data[field] !== '') {
      return data[field];
    }
  }

  return null;
}

/**
 * Get trainee ID from URL search params with decryption support
 * @param {URLSearchParams} searchParams - URL search parameters
 * @param {string} paramName - Parameter name to look for (default: 'traineeId')
 * @param {boolean} encrypted - Whether the ID is encrypted (default: false)
 * @returns {string|null} - Trainee ID or null if not found
 */
export function getTraineeIdFromParams(searchParams, paramName = 'traineeId', encrypted = false) {
  if (!searchParams) return null;

  // Try different parameter names
  const possibleParams = [paramName, 'id', 'traineeId'];
  
  for (const param of possibleParams) {
    const value = searchParams.get(param);
    if (value) {
      try {
        return encrypted ? decrypt(value) : value;
      } catch (error) {
        console.error(`Error decrypting trainee ID from param ${param}:`, error);
        // If decryption fails, try returning the raw value
        return value;
      }
    }
  }

  return null;
}

/**
 * Get trainee ID from localStorage with fallback options
 * @returns {string|null} - Trainee ID or null if not found
 */
export function getTraineeIdFromStorage() {
  if (typeof window === 'undefined') return null;

  try {
    // First try the dedicated traineeId storage
    const directId = localStorage.getItem('traineeId');
    if (directId) return directId;

    // Fallback to extracting from stored data
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const parsed = JSON.parse(storedData);
      return extractTraineeId(parsed);
    }
  } catch (error) {
    console.error('Error reading trainee ID from localStorage:', error);
  }

  return null;
}

/**
 * Store trainee ID in localStorage with standardized key
 * @param {string|number} traineeId - Trainee ID to store
 * @param {Object} additionalData - Additional data to store alongside ID
 */
export function storeTraineeId(traineeId, additionalData = null) {
  if (typeof window === 'undefined') return;

  try {
    if (traineeId != null && traineeId !== '') {
      localStorage.setItem('traineeId', String(traineeId));
      
      if (additionalData) {
        const existingData = localStorage.getItem('data');
        const dataToStore = existingData ? 
          { ...JSON.parse(existingData), ...additionalData, traineeId } :
          { ...additionalData, traineeId };
        
        localStorage.setItem('data', JSON.stringify(dataToStore));
      }
    }
  } catch (error) {
    console.error('Error storing trainee ID:', error);
  }
}

/**
 * Validate trainee ID format
 * @param {any} traineeId - ID to validate
 * @returns {boolean} - Whether the ID is valid
 */
export function isValidTraineeId(traineeId) {
  if (traineeId == null || traineeId === '') {
    return false;
  }

  const stringId = String(traineeId).trim();
  
  // Check if it's a valid number or non-empty string
  return stringId.length > 0 && !isNaN(Number(stringId));
}

/**
 * Normalize trainee ID to a consistent format
 * @param {any} traineeId - ID to normalize
 * @returns {number|null} - Normalized ID as number or null if invalid
 */
export function normalizeTraineeId(traineeId) {
  if (!isValidTraineeId(traineeId)) {
    return null;
  }

  const numericId = Number(traineeId);
  return isNaN(numericId) ? null : numericId;
}

/**
 * Build trainee data object with consistent field mapping
 * @param {Object} rawData - Raw data from API or storage
 * @returns {Object} - Normalized trainee data
 */
export function normalizeTraineeData(rawData) {
  if (!rawData || typeof rawData !== 'object') {
    return {};
  }

  const traineeId = extractTraineeId(rawData);
  
  return {
    ...rawData,
    traineeId: normalizeTraineeId(traineeId),
    // Ensure consistent field names
    fullname: rawData.fullname || rawData.FullName || rawData.full_name,
    registrationno: rawData.registrationno || rawData.registrationNo || rawData.registration_no,
  };
}