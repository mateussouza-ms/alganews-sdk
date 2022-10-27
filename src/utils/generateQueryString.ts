export function generateQueryString(params: {
  [key: string]: string | number | boolean | string[] | undefined;
}) {
  const convertedParams: { [key: string]: string } = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      convertedParams[key] = String(value);
    }
  });

  const urlParams = new URLSearchParams(convertedParams);

  return `?${urlParams.toString()}`;
}
