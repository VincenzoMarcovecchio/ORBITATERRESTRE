export default async function handler(req, res) {
  const {
    query: { search },
    method,
  } = req;

  const reso = await fetch(
    `https://ll.thespacedevs.com/2.1.0/agencies/?search=${search}`
  );

  const agencies = await reso.json();

  const agenciesData = agencies;

  // Pass data to the page via props
  if (agenciesData.length > 0) {
    res.status(200).json(agenciesData);
  } else {
    res.status(400).json('e andato storto');
    res.status(400).json(req);
  }
}
