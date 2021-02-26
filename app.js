const Request = require("./Request")
const req = new Request({ url: "dataprovider.example/data"}, function(...res) {
    res.forEach(response => console.log(response.data))
})
req.end()

//QUESTION: ??? Answer: метод класса  end() не вызывается
