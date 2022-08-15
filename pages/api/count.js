// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import {join, resolve} from 'path'

export default function handler(req, res) {
  const filePath = join(resolve(process.cwd(), "pDatabase"), "count.json");

  let currentCount 
  try{currentCount = JSON.parse(fs.readFileSync(filePath)).count || 0;} catch {currentCount = 0}
  
  if (req.method === 'POST') {
    currentCount++
    const fileContents = JSON.stringify({count:currentCount});
    fs.writeFileSync(filePath, fileContents, 'utf8')
  } 
  res.status(200).json({ count: currentCount })
  return
}
