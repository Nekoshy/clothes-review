import {serialize} from "cookie";

export default async (req, res) =>
{
    res.setHeader('Set-Cookie', [
        serialize('auth', '', {
            maxAge: -1,
            path: '/',
        }),
    ]);
    res.writeHead(302, { Location: '/login' });
    res.end();
}
