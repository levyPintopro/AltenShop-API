export const PASSWORDREGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$/
export function isNotEmpty(value: any) {
  if (value !== null || value !== undefined) return value
}
