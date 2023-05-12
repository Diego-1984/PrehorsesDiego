const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      messages: [],
      horse: [],
      ganaderia:[]
    },
    actions: {
      setUser: (user) => {
        setStore({ ...getStore(), user });
      },
      setMessages: (messages) => {
        setStore({ ...getStore(), messages });
      },
      setHorse: (horse) => {
        setStore({ ...getStore(), horse });
      },
     
      setGanaderia: (ganaderia) => {
				setStore({...getStore(), ganaderia})
			},
      
      getGanaderia: async() => {
				const response = await fetch(process.env.BACKEND_URL + "/api/ganaderia",{
					method : "GET",
					headers: {
						"Content-type": "application/json"
					},
				})
				const data = await response.json()
				getActions().setGanaderia(data)
				
			},

      loginUser: (user) => {
        fetch(process.env.BACKEND_URL + "/api/user/login/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            if (data.token) {
              localStorage.setItem("token", data.token);
            } else {
              console.log(data);
            }
          });
      },

      getMessages: async (horseId) => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/message/${horseId}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
          }
        );
        const messages = await response.json();
        setStore({ ...getStore(), messages });
      },

      postMessage:async() =>{
        const response = await fetch(`${process.env.BACKEND_URL}/api/message`,
        {

        })
      },

      editUser: async(userId, user) => {
        const response = await fetch(
          process.env.BACKEND_URL + `api/user/${userId}`,
          {
            method: "PUT",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
            body: JSON.stringify(user) 
          }
        );
        const data = await response.json();
        getActions().setUser(data)
      },

      getHorse: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/horse",{
					method : "GET",
					headers: {
            "Content-type": "application/json",
          },
				})
				const data = await response.json()
				getActions().setHorse(data)
      },

      addHorse: async (horse) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/horse", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
          body: JSON.stringify(horse)
        });
        const data = await response.json();
        getActions().setHorse(data)
      },

      editHorse: async (horseId, horse) => {
        const response = await fetch(
          process.env.BACKEND_URL + `api/horse/${horseId}`,
          {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
            body: JSON.stringify(horse)
          }
        );
        const data = await response.json();
        getActions().setHorse(data)
      },

      deleteHorse: async (horseId) => {
        const response = await fetch(
          procsess.env.BACKEND_URL + `api/horse/${horseId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
      },

      getOneHorse: async (horseId) => {
        const response = await fetch(
          process.env.BACKEN_URL + `/api/horse/${horseId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
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
      },
    },
  };
};

export default getState;