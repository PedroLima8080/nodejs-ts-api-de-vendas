import dotenv from 'dotenv';

interface JWT {
    secret: string;
    expiresIn: string;
}

const jwt: JWT = {
    secret: dotenv.config().parsed.JWT_SECRET ?? '',
    expiresIn: dotenv.config().parsed.JWT_EXPIRESIN ?? '',
};

export { jwt };
