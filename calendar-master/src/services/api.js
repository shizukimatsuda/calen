//const host = "http://localhost:3000/api";
const url = path => `/api/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
};


export const get = async path => {
    const resp = await fetch(url(path));
    const result = await resp.json();

    return result;
};

export const post = async (path, body) => {
    const options = { ...header, method: "POST", body: JSON.stringify(body) };

    const resp = await fetch(url(path), options);

    const result = await resp.json();

    return result;
};

export const deleteRequest = async (path, id) => {
    const options = { method: "DELETE" , id: JSON.stringify(id)};

    await fetch(url(path), options);

    //204 no Contentが帰ってくるので成功の場合何もreturnしない
    return;
};