export default async function ApiCall({
  collection,
  method = "get",
  body,
  headers
}) {
  try {
    const response = await fetch(
      url,
      {
        method,
        body: JSON.stringify(body),
        headers
      }
    )
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }

  const getBathrooms = async () => {
    const querySnapshot = await getDocs(collection(dataBase, "bathrooms"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    console.log(docs);
    setBathroomsList(docs);
  }
}