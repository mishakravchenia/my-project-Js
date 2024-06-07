function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("Основа має бути числом");
  }
  if (!Number.isInteger(base) || base < 0) {
    throw new RangeError("Основа має бути невід'ємним цілим числом");
  }
  if (base > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("Основа має бути максимальним безпечним  числом");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("Показник степеня має бути числом");
  }
  if (!Number.isInteger(exponent) || exponent < 0 || exponent > 10) {
    throw new RangeError("Показник степеня має бути невід'ємним цілим числом");
  }

  return base ** exponent;
}
try {
  console.log(pow(5, 3));
} catch (error) {
  console.log("error :>> ", error);
}
