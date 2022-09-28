import { getData, getPath } from "../../utils/functions"
export default function handler(req, res) {

    const filepath = getPath()
    const data = getData(filepath)

    res.status(200).json({item: data.info})

}