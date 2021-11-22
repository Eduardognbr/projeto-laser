import axios from 'axios';

const apiCNPJ = axios.create({
    baseURL: 'https://www.receitaws.com.br/v1/cnpj/'
});

apiCNPJ.interceptors.request.use(async config => {
    const token = "8210c1caa3a0e0c9a30ae9d9065ad93bcb54827ae8caa3ef666fbcea5a3c49e3";

    if (token) {
        apiCNPJ.defaults.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

export default apiCNPJ;