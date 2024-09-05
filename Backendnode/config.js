import {config} from 'dotenv'

config()

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESSKEYID
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRETACCESSKEY
export const AWS_REGION = process.env.AWS_REGION

console.log(AWS_BUCKET_NAME,AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,  AWS_REGION);