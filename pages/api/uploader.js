import nextConnect from 'next-connect';
import multer from 'multer';
import crypto from 'crypto';


const upload = multer({
  storage: multer.diskStorage({
    destination: './public/upload',
    filename: (req, file, cb) => {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`
      return cb(null,fileName)
    },
  }),
});

const apiRoute = nextConnect().use(upload.single('file')).post((req,res)=>{

  res.status(200).json({ name:req.file});
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};