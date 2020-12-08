class ServiceController {
    
    upload = async (req, res) => {
        try{
            if (req.file == undefined) {
                return res.status(400).send({ message: "Please upload a file!"});
            }
          
            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
            });
        }
        catch(error){
            res.status(500).send({
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
              });
        }
    }
}
module.exports = new ServiceController;