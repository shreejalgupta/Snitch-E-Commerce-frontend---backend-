import ImageKit, { toFile } from '@imagekit/nodejs';
import config from '../config/config.js';

const client = new ImageKit({
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    timeout: 45_000,
    maxRetries: 0
})

/**
 * @description Upload a file to ImageKit
 * @param {Object} param0
 * @param {Buffer} param0.file - The file buffer to upload
 * @param {string} param0.fileName - The name of the file to upload
 * @param {string} param0.folder - The folder path in ImageKit where the file will be uploaded
 * @returns {Promise<Object>} - The response from ImageKit after uploading the file
 */

export async function uploadFile({buffer, fileName}) {
    const response = await client.files.upload({
        file: await toFile(buffer),
        fileName: fileName, 
        folder: "snitch"
    });

    return response;
}