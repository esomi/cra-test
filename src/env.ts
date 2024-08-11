
export const API_BASE_URL = window._env_?.REACT_APP_API_BASE_URL || process.env.REACT_APP_API_BASE_URL || '';
export const STRING1 = window._env_?.REACT_APP_STRING1 || process.env.REACT_APP_STRING1 || '';
export const STRING2 = window._env_?.REACT_APP_STRING2 || process.env.REACT_APP_STRING2 || '';

export const SUB_PATH = process.env.NODE_ENV === 'production' ?
    window._env_?.PUBLIC_URL || '' :
    process.env.PUBLIC_URL || '';