import axios from 'axios';
export default async function handler(req, res) {
  const reso = await axios.get(
    `https://ll.thespacedevs.com/2.1.0/astronaut/?limit=700&offset=12`,
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    }
  );

  const astronautData = await reso.json();

  const astronaut = reso;

  // Pass data to the page via props
  if (astronaut.length > 1) {
    res.status(200).json(astronaut);
  } else {
    res.status(400).json('e andato storto');
  }
}
