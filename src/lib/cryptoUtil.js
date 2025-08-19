
export function encrypt(text) {
  return Buffer.from(String(text).toString(), 'utf8').toString('base64');
}

export function decrypt(encodedText) {
  return Buffer.from(encodedText, 'base64').toString('utf8');
}