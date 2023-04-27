const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {
			setUser:(user) => {
				setStore({user:user})
			},
			loginUser: (user) =>{
				fetch(
					process.env.BACKEND_URL + "/api/user/login/",
					{
						method: "POST",
						headers: {
							// Authorization: "Bearer" + localStorage.getItem("token"),
							"Content-type": "application/json"
						},
						body: JSON.stringify(user)
					}
				)
				.then((resp)=> resp.json())
				.then((data)=>{
					console.log(data)
					if (data.token){
						localStorage.setItem("token", data.token)
					}else{
						console.log(data)
					}
				})
			  },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				// try{
				// 	// fetching data from the backend
				// 	// const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
				// 	const data = await resp.json()
				// 	setStore({ message: data.message })
				// 	// don't forget to return something, that is how the async resolves
				// 	return data;
				// }catch(error){
				// 	console.log("Error loading message from backend", error)
				// }
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;