import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const uploadFolder = path.resolve(__dirname, '..', 'public', 'uploads');
export default {
    directory: uploadFolder,
    limits: { fileSize: 1000000 },
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(request, file, callback) {
            const extArray = file.mimetype.split('/');
            const ext = extArray[extArray.length - 1];
            const filename = new Date().getTime() + crypto.randomBytes(10).toString('hex') + '.' + ext; //cria bits randomicos de tamanho 10 e transforma em string em base hexadecimal
            callback(null, filename);
        },
    }),
};
