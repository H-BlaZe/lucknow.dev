export const smoothScrollTo = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const sendMessageToAPI = async (message) => {
  try {
    const API_URL = "https://nawabapi.lucknow.dev";
    const response = await fetch(`${API_URL}/${encodeURIComponent(message)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.llm_response || 'Response not available';
  } catch (error) {
    console.error('API Error:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
};
