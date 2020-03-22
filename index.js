const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr,alert) {
      let new_arr = Array.isArray(arr) ? arr : Object.values(arr)
      for(let num of new_arr){
        alert(num)
      }
      return arr 
    },

    map: function(arr,func) {
      let new_arr = Array.isArray(arr) ? arr : Object.values(arr)

      let final_arr = []

      for(let num of new_arr){
        final_arr.push(func(num))
      }
      return final_arr
    },

    reduce: function(arr, func, total) {
      let new_arr = Array.isArray(arr) ? arr : Object.values(arr)

      let new_total , i

      if(total){
        new_total = total 
        i = 0
      }else{
        new_total = new_arr[0]
        i = 1 
      }

      for(i; i < new_arr.length; i++){
        new_total = func(new_total,new_arr[i])
      }

      return new_total 
    },

    functions: function(obj) {
      const func_arr = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          func_arr.push(key)
        }
      }

      for(let i = 0; i < func_arr.length; i++){
        for(let j = 0; j < func_arr.length; j ++){
          if(func_arr[j] > func_arr[i]){
              let x = func_arr[i]
              func_arr[i] = func_arr[j]
              func_arr[j] = x  
          }
        }
      }

      return func_arr
    },

    find: function(arr,func) {
      let  new_arr = Array.isArray(arr) ? arr : Object.values(arr)

      let answer 

      for(let num of new_arr){
        if(func(num)){
          answer = num 
          break
        }
      }

      return answer
    },

    filter: function(arr_or_obj,func){
      let arr = Array.isArray(arr_or_obj) ? arr_or_obj : this.values(arr_or_obj)

      let answer_arr = []

      for(let i = 0; i < arr.length ; i++){
        if(func(arr[i],i)){
          answer_arr.push(arr[i])
        }
      }
      return answer_arr
    },

    size: function(arr_or_obj) {
      let arr = Array.isArray(arr_or_obj) ? arr_or_obj : Object.values(arr_or_obj)

      return arr.length 
    },

    first: function(arr,amout = 0) {
      let first_n = amout === 0 ? arr[0] : []

      for(let i = 0; i < amout; i++){
        first_n.push(arr[i])
      }
      return first_n
    },

    last: function(arr,amount = 0) {
      let last_n = amount === 0 ? arr[arr.length - 1] : []

      for(let i = 1; i <= amount; i ++ ){
        last_n.unshift(arr[arr.length - i])
      }
      return last_n
    },

    compact: function(arr){
      let new_arr = []

      for(let element of arr){
        if(!!element){
          new_arr.push(element)
        }
      }

      return new_arr 
    },

    sortBy: function(arr,func){
      let new_arr = [...arr]
      return new_arr.sort((a,b) => func(a) - func(b))
    },

    flatten: function(arr,single_level) { 
      let new_arr = []
      if(single_level){
        for(let element of arr){
          Array.isArray(element) ? new_arr.push(...element) : new_arr.push(element)
        }
      }else{
        new_arr = arr.reduce((new_arr,element) => Array.isArray(element) ? [...new_arr,...this.flatten(element)] : [...new_arr,element] , [])
      }
       return new_arr
    },

    uniq: function(arr,is_iterantee = true,iterante = false){
      let hash = {}
      let uniq_arr = []
      if(!is_iterantee && iterante){
        arr.forEach(element => {
          if(!hash[`${iterante(element)}a`]){
            hash[`${iterante(element)}a`] = element
          }
        })
        uniq_arr = this.values(hash)
      }else{
        uniq_arr = this.filter(arr,(element,index) =>  arr.indexOf(element) === index)
      }
      return uniq_arr
    },

    keys: function(obj) {
      let arr = []
      for(let key in obj){
        arr.push(key)
      }
      return arr 
    },

    values: function(obj) {
      let arr = []
      for(let key in obj){
        arr.push(obj[key])
      }
      return arr 
    }

  }
})()

fi.libraryMethod()
