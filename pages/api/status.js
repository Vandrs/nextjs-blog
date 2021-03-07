export default function handler(request, response) {
    let  date = new Date()
    response.status(200).json({
        'alive':true,
        'time': date.toLocaleString()
    });
}