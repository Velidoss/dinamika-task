const getJSONdata = async (query) => {
  const request = await fetch(query);
  return await request.json();
};

export default getJSONdata;