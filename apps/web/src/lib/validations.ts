export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isStrongPassword(password: string) {
  return password.length >= 8;
}

export function isValidPhone(phone: string) {
  return /^(\+8801|01)[0-9]{9}$/.test(phone);
}