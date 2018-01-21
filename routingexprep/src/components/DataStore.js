//DataStore
class DataStore {
    
      constructor() {
        this._data = [
          { id: 1, author: "Danny D", title: "How to Learn JavaScript in pHouse - Vol 1", img:"../img/js1.png"},
          { id: 2, author: "Emma B", title: "Study hard - Vol 2", img:"../img/react1.png"},
          { id: 3, author: "Monkey Man", title: "Dont use .this if not bind", img:"../img/noimg1.png"},
          { id: 4, author: "Silentwolf", title: "My life with React", img:"../img/react1.png"},
          { id: 5, author: "Ali", title: "My work with young bois at hundige - Vol 1", img:"../img/waves1.png"},
          { id: 6, author: "Gunni", title: "I dont know what im doing - Vol 25", img:"../img/noimg1.png"},
          { id: 7, author: "Bo Bech", title: "The life of a chef", img:"../img/bech1.png"},
          { id: 8, author: "Trump", title: "Im gay... you know it", img:"../img/trump1.png"},
          { id: 9, author: "Barack O", title: "I had a dream once", img:"../img/obama1.png"},
          { id: 10, author: "Last unknown author", title: "The last author - Vol 1", img:"../img/ubook1.png"},
          
        ]
        this._nextID = 11;
      }

      get data(){
        return this._data;
      }

      addData(data){
        data.id = this._nextID;
        this._data.push(data);
        this._nextID++;
      }

      deleteData(ide)
      {
        for (var i = 0; i < this._data.length; i++) 
        {
          if(this._data[i].id == ide){
            this._data.splice(i,1);
          } 
        }
      }

      editData(ide, data)
      {
        for (var i = 0; i < this._data.length; i++) 
          {
            if(this._data[i].id == ide){

              this._data[i].author = data.author;
              this._data[i].title = data.title;

              //console.log(this._books[i].title)
              //console.log(book.title);
            } 
          }
      }
      

}
    
let dataStore = new DataStore();
export default dataStore;

    