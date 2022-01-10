const notFoundMiddleware = (req, res) => res.status(404).send('Route Doeas Not Exist!!!')

export default notFoundMiddleware