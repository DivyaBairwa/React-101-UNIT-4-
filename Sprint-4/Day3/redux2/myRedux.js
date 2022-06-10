const reducer = (store,{type,payload})=>{
    switch(type){
        case "INT_COUNT":
            return {counter:store.counter+payload};
        default:
            return store
    }
}

class Store {
    constructor(reducer,init){
        this.reducer = reducer;
        this.store = store
    }

    getState(){
        return this.store;
    }

    dispatch(action){
        this.store = this.reducer(this.store,action)
    }
}

const store = new Store(reducer,init);

console.log(store.getState());


