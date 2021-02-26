

const Request = require("./Request")
const req = new Request({ url: "dataprovider.example/data"}, function(res) {
    console.log( res )
})
req.end()

//QUESTION: ??? Answer: метод класса  end() не вызывается
//Question:Убедится в том что везьде код прописан применяя "arrow functions" - 

// const options = [
//     { url: "dataprovider.example/data"},
//     { callback: function(res) {
//                     console.log( res )
//                 }
//     }
// ]