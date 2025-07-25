const POISON_ARRAY = [
  156, 33, 64, 174, 120, 204, 69, 242, 177, 98, 16, 244, 75, 5, 21, 7, 145, 39,
  156, 119, 246, 63, 43, 201, 91, 164, 171, 244, 198, 100, 252, 91, 92, 193, 95,
  70, 131, 18, 69, 131, 88, 40, 241, 203, 190, 210, 154, 138, 4, 5, 212, 34, 25,
  151, 150, 253, 135, 59, 144, 152, 202, 190, 196, 29, 23, 165, 234, 254, 6,
  245, 142, 18, 234, 49, 63, 31, 33, 152, 73, 6, 212, 119, 245, 182, 248, 40,
  167, 206, 230, 204, 245, 48, 200, 169, 186, 110, 124, 105, 22, 7, 128, 56, 85,
  12, 48, 130, 207, 114, 168, 216, 104, 20, 28, 183, 78, 194, 131, 33, 245, 47,
  203, 214, 109, 27, 8, 214, 195, 249, 152, 240, 51, 142, 123, 250, 208, 160,
  51, 207, 6, 67, 63, 111, 75, 198, 63, 50, 181, 137, 163, 43, 160, 141, 19,
  188, 37, 50, 105, 20, 252, 93, 134, 39, 130, 234, 109, 223, 161, 74, 175, 44,
  35, 62, 201, 159, 3, 170, 224, 28, 113, 184, 243, 116, 166, 132, 77, 93, 130,
  101, 198, 173, 143, 8, 131, 180, 130, 61, 242, 43, 39, 105, 44, 239, 157, 181,
  86, 150, 180, 100, 172, 134, 53, 76, 220, 18, 210, 150, 99, 234, 57, 252, 242,
  40, 205, 185, 53, 162, 160, 211, 134, 91, 44, 65, 160, 30, 9, 28, 192, 239,
  255, 92, 108, 226, 242, 67, 0, 201, 158, 39, 128, 97, 215, 65, 221, 197, 22,
  231,
];

const make32 = (inputString: string) => {
  const targetLength = 32;
  let resultString = "";
  while (resultString.length < targetLength) {
    resultString += inputString;
  }
  resultString = resultString.substring(0, targetLength);
  return Array.from(resultString, (char) => char.charCodeAt(0));
};

export const encode = (email: string, password: string) => {
  const emailChars = make32(email);
  const passwordChars = make32(password);
  let encodedResult = "";
  for (let i = 0; i < 32; ++i) {
    const index = (emailChars[i] ^ passwordChars[i]) & 0xff;
    const value = POISON_ARRAY[index];
    encodedResult += value.toString(16).padStart(2, "0").toUpperCase();
  }
  return encodedResult;
};
