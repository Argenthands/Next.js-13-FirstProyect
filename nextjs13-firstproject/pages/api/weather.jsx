export default async function handler(req, res){
    const { city } = req.query;
    const apiUrl = `https://wttr.in/${city}?format=j1`;
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();
    return res.status(200).json(data);
}
