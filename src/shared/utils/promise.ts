// small helper for debouncing/cancelable promises or other shared utilities
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))
