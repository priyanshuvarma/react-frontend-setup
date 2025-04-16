
const prod = {
    POSTGRES_API:'https://python-sanic-backened.onrender.com',
};

const dev = {
    POSTGRES_API:'http://127.0.0.1/api/',
};
  


export const environment = process.env.NODE_ENV === 'development' ? dev : prod;


