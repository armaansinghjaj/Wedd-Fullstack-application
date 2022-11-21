// module imports
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var mysql = require('mysql');
var fs = require('fs');
var path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, __dirname+"\\public\\image")
    },
    filename: (req, file, cb) =>{
        let suffix = path.extname(file.originalname);

        let new_name = ""
        if(req.query.page === "home")
            new_name = "homepage" + suffix;
        else if(req.query.page === "about")
            new_name = "aboutpage" + suffix;
        else if(req.query.page === "contact")
            new_name = "contactpage" + suffix;
        else if(req.query.page === "news")
            new_name = "newspage" + suffix;
        
        cb(null, new_name);
    }
})
const upload = multer({storage: storage});

const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));
const port = process.env.port || 4000;

const oneDay = 1000 * 60 * 60 * 24;
let sess = {
    secret: "Thisisasecret",
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false, maxAge:oneDay}
};

// Set up middleware
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

// create database connection
var pool = mysql.createPool({
    connectionLimit:100,
    host: "t07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "vyagfein4amzelvg",
    password: "sukk89i6asp6quqp",
    database: "l04wu7ocit93m8cz"
});

function loadDefaultValues(req){
    req.session.drivers=[];
    req.session.edit_driver_id=null;
    req.session.edit_admin_id=null;
    req.session.edit_f_name=null;
    req.session.edit_l_name=null;
    req.session.edit_email=null;
    req.session.name="Armaan";
}

// --------------------------------- routes ---------------------------------------

// default route
app.get("/", (req, res)=>{

    loadDefaultValues(req);
    
    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM background`, function (err, result, fields) {
            
            con.release();
            res.render("home", {year: new Date().getFullYear(), title: "Homepage", image: result[0].home_page});
        });
    });
})

app.get("/ride", (req, res)=>{

    loadDefaultValues(req);

    res.render("ride", {year: new Date().getFullYear(), title: "Ride"});
})

app.post("/ride", (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let pick = req.body.pick;
    let destination = req.body.destination;

    if (name===""||email===""||phone===""||pick===""||destination===""){
        res.send('error');
        return;
    }

    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`INSERT INTO rideRequests (request_id,name,email,phone,pickup_address,destination) VALUES (0,'${name}','${email}','${phone}','${pick}','${destination}') `, function (err, result, fields) {
    
            con.release();
            
        });
    });

    res.redirect('/ride')
})

app.get("/about", (req, res)=>{
    // pool.getConnection((err, con)=>{
    //     if (err) throw err;
    //     con.query(`SELECT * FROM background`, function (err, result, fields) {
    
    //         con.release();
    //         res.render("about", {year: new Date().getFullYear(), title: "About us", about_image: result[0].about_page});
    //     });
    // });
    const str =
        {
            "h1": "We know transportation.",
            "abouth1": "400+ communities depend on us for it!",
            "para1": "At We DD, we believe there is a better way to transport people. In fact, we believe there is a better way to lead a franchise. What we do is transport people using two unique services. Chauffeur and shuttle. How we do it is part of the secret sauce. We DD has grown to over 400 communities in two countries by out-caring the competition. This is due in part, to the fact that we have local franchise owners that hire the best Chauffeurs to drive and provide service. This is also due to our governance model. At We DD, we are focused as much on the people, our franchises, as we are on the profit. The franchises in turn are focused on their people, the Chauffeurs and the customer. As a result, we make transportation affordable,accessible and convenient.",
            "para2": "The team at WeDD understands that anything worthwhile doing takes hard work, commitment and dedication. This translates into exceptional customer experiences, strongly performing franchises and exciting opportunities.",
            "para3": "With plans to expand globally, Driverseat continues to disrupt the transportation industry while offering consistent, care-focused solutions to its clients, franchisees and business partners."
        };
    res.send(str);
})

app.get("/contact", (req, res)=>{
    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM background`, function (err, result, fields) {
    
            con.release();
            res.render("contact", {year: new Date().getFullYear(), title: "Contact us", contact_image: result[0].contact_page});
        });
    });
})

app.post("/contact", (req, res)=>{
    let name = req.body.name;
    let address = req.body.address;
    let phone = req.body.phone;
    let service_id = req.body.services;
    let email = req.body.email;
    let comments = req.body.comments;
    let updates = (req.body.consent==1)?req.body.consent:0;

    if (name===""||address===""||phone===""||service_id===""||email===""||comments===""||updates===""){
        res.send('error');
        return;
    }

    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`INSERT INTO requests (request_id,name,address,phone,service_id,email,comments,updates) VALUES (0,'${name}','${address}','${phone}','${service_id}','${email}','${comments}','${updates}') `, function (err, result, fields) {
    
            con.release();
            
        });
    });

    res.redirect("/contact");
})

app.get("/news", (req, res)=>{
    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM background`, function (err, result, fields) {
    
            con.release();
            res.render("news", {year: new Date().getFullYear(), title: "News", news_image: result[0].news_page});
        });
    });
})

// Login routes
app.get("/login", (req, res)=>{

    loadDefaultValues(req);

    res.render("login", {year: new Date().getFullYear(), title: "Login"});
})
app.post("/login", (req, res)=>{
    
})

// Signup routes
app.get("/signup", (req, res)=>{

    loadDefaultValues(req);

    res.render("signup", {year: new Date().getFullYear(), title: "Signup"});
})
app.post("/signup", (req, res)=>{
    
})

app.get("/admin", (req, res)=>{

    loadDefaultValues(req);

    res.render("admin_home");
})

app.get("/news", (req, res)=>{

    loadDefaultValues(req);

    res.render("admin_home");
})

app.get("/drivers", (req, res)=>{

    loadDefaultValues(req);
    let sess = req.session;

    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM driver `, function (err, result, fields) {
    
            con.release();
            
            sess.drivers=result;
            res.render("drivers",sess);
        });
    });
    
})
app.post("/drivers", (req, res)=>{

    let sess = req.session;

    let action = req.body.action;

    if (action==='edit') {

        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`SELECT * FROM driver WHERE driver_id = '${req.body.selected}' `, function (err, result, fields) {
                
                con.release();
                
                sess.edit_driver_id = result[0].driver_id;
                sess.edit_email = result[0].email;
                sess.edit_f_name = result[0].first_name;
                sess.edit_l_name = result[0].last_name;

                res.render("drivers",sess);
                return;
            });
        });
    }
    if (action==='delete') {
        
        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`DELETE FROM driver WHERE driver_id = '${req.body.selected}' `, function (err, result, fields) {
        
                con.release();
                res.redirect('/drivers');
                return;
            });
        });
    }
    if (action==='update') {
        if (req.body.edit_f_name===""||req.body.edit_l_name===""||req.body.edit_email===""){
            res.send('error');
        }
        else{
            pool.getConnection((err, con)=>{
                if (err) throw err;
                con.query(`UPDATE driver set first_name = '${req.body.edit_f_name}', last_name = '${req.body.edit_l_name}', email = '${req.body.edit_email}' WHERE driver_id = '${req.body.edit_driver_id}' `, function (err, result, fields) {
                    con.release();
                    res.redirect('/drivers');
                    return;
                });
            });
        }
    }
    if (action==='add') {
        if (req.body.new_f_name===""||req.body.new_l_name===""||req.body.new_email===""||req.body.new_password===""){
            res.send('error');
        }
        else{
            pool.getConnection((err, con)=>{
                if (err) throw err;
                con.query(`INSERT INTO driver (driver_id, email , first_name,last_name,password) VALUES (0,'${req.body.new_email}','${req.body.new_f_name}','${req.body.new_l_name}','${req.body.new_password}')`, function (err, result, fields) {
            
                    con.release();
                    res.redirect("/drivers");
                });
            });
        }
    }
})

app.get("/admins", (req, res)=>{

    loadDefaultValues(req);
    let sess = req.session;

    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM admin `, function (err, result, fields) {
    
            con.release();

            sess.admins=result;
            sess.edit_admin_id = null;
            sess.edit_email = null;
            sess.edit_f_name = null;
            sess.edit_l_name = null;

            res.render("admins",sess);
        });
    });
    
})
app.post("/admins", (req, res)=>{

    let sess = req.session;
    let action = req.body.action;
    
    if (action==='edit') {

        pool.getConnection((err, con)=>{

            if (err) throw err;
            con.query(`SELECT * FROM admin WHERE admin_id = '${req.body.selected}' `, function (err, result, fields) {

                con.release();
                
                sess.edit_admin_id = result[0].admin_id;
                sess.edit_email = result[0].email;
                sess.edit_f_name = result[0].first_name;
                sess.edit_l_name = result[0].last_name;

                res.render("admins",sess);
                return;
                
            });
        });
    }
    if (action==='delete') {

        pool.getConnection((err, con)=>{
            
            if (err) throw err;
            
            con.query(`DELETE FROM admin WHERE admin_id = '${req.body.selected}' `, function (err, result, fields) {
                con.release();
                res.redirect('/admins');
                return;
            });

        });
    }
    if (action==='update') {
        if (req.body.edit_f_name===""||req.body.edit_l_name===""||req.body.edit_email===""){
            res.send('error');
        }
        else{
            pool.getConnection((err, con)=>{
                if (err) throw err;
                con.query(`UPDATE admin set first_name = '${req.body.edit_f_name}', last_name = '${req.body.edit_l_name}', email = '${req.body.edit_email}' WHERE admin_id = '${req.body.edit_admin_id}' `, function (err, result, fields) {
                    
                    con.release();
                    
                    res.redirect('/admins');
                    return;
                });
            });
        }
    }    
    if (action==='add') {
        if (req.body.new_f_name===""||req.body.new_l_name===""||req.body.new_email===""||req.body.new_password===""){
            res.send('error');
        }
        else{
            pool.getConnection((err, con)=>{
                
                if (err) throw err;
                con.query(`INSERT INTO admin (admin_id, email , first_name,last_name,password) VALUES (0,'${req.body.new_email}','${req.body.new_f_name}','${req.body.new_l_name}','${req.body.new_password}')`, function (err, result, fields) {
                    
                    con.release();
                    res.redirect("/admins");
                });
            });
        }
    }
})

app.get("/rides",(req,res)=>{
    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM rideRequests`, function (err, result, fields) {
            con.release();
            res.render("ride_requests",{rides:result});
        });
    });
})

app.get("/requests",(req,res)=>{
    pool.getConnection((err, con)=>{
        if (err) throw err;
        con.query(`SELECT * FROM requests`, function (err, result, fields) {
            con.release();
            res.render("contact_requests",{requests:result});
        });
    });
    
})

// to change the images
app.get("/background", (req, res)=>{
    if(req.query.option){
        switch (req.query.option) {
            case "home":{
                pool.getConnection((err, con)=>{
                    if (err) throw err;
                    con.query(`SELECT * FROM background`, function (err, result, fields) {
                
                        con.release();
                        res.render("bg-home", {images:result})
                    });
                });
                break;
            }
            case "about":{
                pool.getConnection((err, con)=>{
                    if (err) throw err;
                    con.query(`SELECT * FROM background`, function (err, result, fields) {
                
                        con.release();
                        res.render("bg-about", {images:result})
                    });
                });
                break;
            }
            case "contact":{
                pool.getConnection((err, con)=>{
                    if (err) throw err;
                    con.query(`SELECT * FROM background`, function (err, result, fields) {
                
                        con.release();
                        res.render("bg-contact", {images:result})
                    });
                });
                break;
            }
            case "news":{
                pool.getConnection((err, con)=>{
                    if (err) throw err;
                    con.query(`SELECT * FROM background`, function (err, result, fields) {
                
                        con.release();
                        res.render("bg-news", {images:result})
                    });
                });
                break;
            }
        }
    }
    else{
        res.render("background");
    }
})
app.post("/background", upload.single('image'), (req, res)=>{

    // let background_placeholder_path =  __dirname+"\\public\\backgroundPlaceholder\\Placeholder.png";
    
    // for home page
    if(req.body.action && req.body.action === "for_home"){
        let originalname = req.file.originalname;
        let imageName = "image/homepage"+path.extname(originalname);
        
        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`SELECT home_page FROM background`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else {
                    let full_path = __dirname+"/public/"+result[0].home_page;
                    
                    // let files = fs.readdirSync(__dirname+"/public/image");
                    // console.log(files.includes("homepage"+path.extname(result[0].home_page)));
                    fs.unlinkSync(full_path);
                    // try {
                    //     fs.unlinkSync(full_path);
                    // } catch(fileRemoveError) {
                        
                    //     pool.getConnection((err, con)=>{
                    //         if (err) throw err;
                    //         con.query(`UPDATE background SET home_page = '${background_placeholder_path}'`, function (err, result, fields) {
                    //             con.release();
                                
                    //             if(err) throw err;
                    //             else res.redirect("/background");
                    //         });
                    //     });
                    // }
                }
            });
        });

        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`UPDATE background SET home_page = '${imageName}'`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else res.redirect("/background");
            });
        });
    }

    // for about page
    else if(req.body.action && req.body.action === "for_about"){
        let originalname = req.file.originalname;
        let imageName = "image/aboutpage"+path.extname(originalname);
        
        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`SELECT about_page FROM background`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else {
                    let full_path = __dirname+"/public/"+result[0].about_page;
                    fs.unlinkSync(full_path);
                }
            });
        });

        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`UPDATE background SET about_page = '${imageName}'`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else res.redirect("/background");
            });
        });
    }
    // for contact page
    else if(req.body.action && req.body.action === "for_contact"){
        let originalname = req.file.originalname;
        let imageName = "image/contactpage"+path.extname(originalname);
        
        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`SELECT contact_page FROM background`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else {
                    let full_path = __dirname+"/public/"+result[0].contact_page;
                    fs.unlinkSync(full_path);
                }
            });
        });

        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`UPDATE background SET contact_page = '${imageName}'`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else res.redirect("/background");
            });
        });
    }

    // for news page
    else if(req.body.action && req.body.action === "for_news"){
        let originalname = req.file.originalname;
        let imageName = "image/newspage"+path.extname(originalname);
        
        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`SELECT news_page FROM background`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else {
                    let full_path = __dirname+"/public/"+result[0].news_page;
                    fs.unlinkSync(full_path);
                }
            });
        });

        pool.getConnection((err, con)=>{
            if (err) throw err;
            con.query(`UPDATE background SET news_page = '${imageName}'`, function (err, result, fields) {
                con.release();
                if(err) throw err;
                else res.redirect("/background");
            });
        });
    }
})

// handling status errors
app.use((req, res)=>{
    res.status(404).send("Page not found.");
})

// app port listener
app.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log(`Server up running at 'http://localhost:${port}/'`);
})