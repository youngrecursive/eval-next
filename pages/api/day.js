export default function handler(req, res) {
    var today = new Date();
    var isFriday = false;
    if (today.getDay() == 5) {
        res.status(200).json({ deploy: false })
    }
    else {
        res.status(200).json({ deploy: true })
    }
}