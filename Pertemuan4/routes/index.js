const express = require('express');
const router = express.Router(); 

router.use("/", (req, res)=>{
    const data = {
        caption:"Mahasiswa", 
        layout: "layout/main-layout",
        data:[
            {
                npm : "2226240048",
                nama : "Alfredo"
            },
            {
                npm : "2226240058",
                nama : "David"
            },
            {
                npm : "2226240115",
                nama : "Roger"
            }
        ]
    };
    res.render("index", data);
    //menuju ke views/index.ejs
})

module.exports = router;