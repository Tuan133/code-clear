const API_BASE_URL = 'http://localhost:5001/api';

/**
 * Helper fetch function with JSON headers and error handling
 */
const request = async (endpoint, method = 'GET', body = null) => {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('tlaundry_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Đã có lỗi xảy ra khi kết nối tới máy chủ!');
  }

  return data;
};

// API Services for Forms
export const submitBookingAPI = (bookingData) => request('/bookings', 'POST', bookingData);
export const submitContactAPI = (contactData) => request('/contact', 'POST', contactData);
export const submitGiftCardAPI = (giftCardData) => request('/gift-cards', 'POST', giftCardData);
export const subscribeNewsletterAPI = (email) => request('/newsletter', 'POST', { email });

// API Services for Dynamic Data Rendering
export const getServicesAPI = () => request('/services', 'GET');
export const getPricingAPI = () => request('/pricing', 'GET');
