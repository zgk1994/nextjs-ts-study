import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import mock from './mock.json'
type Data = {
  currentDate: string
  postData: any[]
}
const productsList = [...mock.products.postData]
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({
    method: req.method,
    query: req.query,
    params: req.query?.params,
  })

  switch (req.method) {
    case 'POST':
      productsList.push(req.body)
      break
    case 'PUT':
      {
        const i = productsList.findIndex((item: any) => item.id === req.body.id)
        if (i >= 0) productsList.splice(i, 1, req.body)
      }
      break
    case 'DELETE':
      {
        const i = productsList.findIndex((item: any) => item.id === req.body.id)
        if (i >= 0) productsList.splice(i, 1)
      }
      break
    default:
      break
  }

  res
    .status(200)
    .json({ currentDate: new Date().toString(), postData: productsList })
}
