export default async function handler(req, res){
    const { id } = req.query;
    const apiUrl = `https://reqres.in/api/users/${id}`;
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();
    return res.status(200).json(data);
}