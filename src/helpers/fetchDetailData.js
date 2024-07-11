export const fetchDetailData = async (url, id) => {
  const urlParam = `${url}/${id}`;
  const response = await fetch(urlParam, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};
