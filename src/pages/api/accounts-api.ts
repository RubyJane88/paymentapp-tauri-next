export default function handler(req, res) {
  const body = req.body;
  console.log(body);
  if([body.firstName || body.lastName || body.email].includes(undefined)) {
    return res.status(400).json({error: 'Missing required fields'});
  }
  res.status(200).json({data: `Hello ${body.firstName}, successfully created with your username: ${body.email}`});
}
