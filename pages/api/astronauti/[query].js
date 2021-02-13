export default async function handler(req, res) {
  const {
    query: { search },
  } = req;

  const reso = await fetch(
    `https://ll.thespacedevs.com/2.1.0/astronaut/?limit=700&offset=12&search=${search}`
  );

  const astronautData = await reso.json();

  const astronaut = astronautData;

  // Pass data to the page via props
  if (astronautData.length > 0) {
    res.status(200).json(astronaut);
  } else {
    res.status(400).json('e andato storto');
    res.status(400).json(req);
  }
}
