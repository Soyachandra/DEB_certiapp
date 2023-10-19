import { Router } from "express";
const router = Router();
//import Members from "../Models/Members.js";
import Certificates from "../Models/certificates.js";//import certificates from Models
/* GET home page. */
router.get("/", function (req, res) {
  res.send("Hello World!");
});
router.post("/", async function (req, res) {
  try {
    const data = req.body;
    const result = await Certificates.create(data)
    res.status(201).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json()
  }
});
router.get("/fetch", async function (req, res) {
  const members = await Certificates.find();
  res.status(200).json(members)
});
export default router;