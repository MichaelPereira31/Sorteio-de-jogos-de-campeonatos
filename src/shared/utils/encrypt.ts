import { createCipheriv, randomBytes } from 'crypto';

export function encrypt(secretKey: string): string {
  const iv = randomBytes(16);

  const cipher = createCipheriv(
    'aes-256-cbc',
    Buffer.from(
      (process.env.ENCRYPT_KEY as string) || 'f96e0cec2e20ecf7ce030da574faf794',
    ),
    iv,
  );

  const encrypting = cipher.update(secretKey);

  const encrypted = Buffer.concat([encrypting, cipher.final()]);

  const encryptedPassword = `${iv.toString('hex')}-${encrypted.toString(
    'hex',
  )}`;

  return encryptedPassword;
}
