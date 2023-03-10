import { alphabetByEncoding, bitsPerByte, bitsPerLetter } from "./constants.browser";

/**
 * Converts a base-64 encoded string to a Uint8Array of bytes.
 *
 * @param input The base-64 encoded string
 *
 * @see https://tools.ietf.org/html/rfc4648#section-4
 */
export const fromBase64 = (input: string): Uint8Array => {
  let totalByteLength = (input.length / 4) * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] !== "=") {
        // If we don't check for this, we'll end up using undefined in a bitwise
        // operation, in which it will be treated as 0.
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << ((limit - j) * bitsPerLetter);
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }

    const chunkOffset = (i / 4) * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
    }
  }

  return new Uint8Array(out);
};
