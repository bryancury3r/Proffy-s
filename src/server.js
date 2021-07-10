const proffys = [
    {   
        name: "Bryan Cury",
        avatar:"https://avatars3.githubusercontent.com/u/59518804?s=400&u=fcb964d892e78269d25059533b92aab01f9b729d&v=4",
        whatsapp: "98212719",
        bio: "Praticante de Street Workout na categoria avançada, com  um dos melhores freestyler e estático do Brasíl e considerado um dos melhores do mundo.", 
        subject: "Quimica", 
        cost: "20", 
        weekday:[0], 
        time_from: [720], 
        time_to: [1220]  
    },
    {   
        name: "Duda",
        avatar:"https://avatars3.githubusercontent.com/u/59518804?s=400&u=fcb964d892e78269d25059533b92aab01f9b729d&v=4",
        whatsapp: "98212719",
        bio: "Praticante de Street Workout na categoria avançada, com  um dos melhores freestyler e estático do Brasíl e considerado um dos melhores do mundo.", 
        subject: "Quimica", 
        cost: "20", 
        weekday:[1], 
        time_from: [720], 
        time_to: [1220] 
    }
]


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.listen(5500)

