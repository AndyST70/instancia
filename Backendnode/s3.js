import { S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import {AWS_REGION, AWS_ACCESS_KEY_ID, AWS_BUCKET_NAME, AWS_SECRET_ACCESS_KEY} from './config.js'
import fs from 'fs'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'


const client = new S3Client ({
    region : AWS_REGION,
    credentials : {
        accessKeyId : AWS_ACCESS_KEY_ID,
        secretAccessKey : AWS_SECRET_ACCESS_KEY
    }
})



export async function uploadFile(file, filename){
    const stream = fs.createReadStream(file) 
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key : `Fotos/${filename}`,
        Body : stream 
    }
    const comamand = new PutObjectCommand(uploadParams)
    const result = await client.send(comamand)
    return result
}
export async function uploadFileMP3(file, filename, folder){
    const stream = fs.createReadStream(file) 
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key : `${folder}/${filename}`,
        Body : stream 
    }
    const comamand = new PutObjectCommand(uploadParams)
    const result = await client.send(comamand)
    return result
}
export async function read(file, filename){
    const stream = fs.createReadStream(file) 
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key : `Fotos/${filename}`,
        Body : stream 
    }
    const comamand = new PutObjectCommand(uploadParams)
    const result = await client.send(comamand)
    return result
}


export async function getFiles(file){
    const command = new ListObjectsCommand({
        Bucket : AWS_BUCKET_NAME,
    }) 
    const result = await client.send(command)
    return result
}

export async function getFile(file){
    const command = new GetObjectCommand({
        Bucket : AWS_BUCKET_NAME,
        Key : file
    }) 
    const result = await client.send(command);
    return result;
}

export async function getFileURL(file){
    const command = new GetObjectCommand({
        Bucket : AWS_BUCKET_NAME,
        Key : file
    }) 
    const result = getSignedUrl(client, command, { expiresIn: 3600 });
    return result;
}


