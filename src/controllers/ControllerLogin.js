
export default new class ControllerLogin{

    async login(req, res){
        res.json(req.body)
    }
}