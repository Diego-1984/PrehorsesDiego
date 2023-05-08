const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      messages: [],
      horse: {},
    },
    actions: {
      setUser: (user) => {
        setStore({ ...store, user });
      },
      setMessages: (messages) => {
        setStore({ ...store, messages });
      },
      setHorse: (horse) => {
        setStore({ ...store, horse });
      },

      loginUser: (user) => {
        fetch(process.env.BACKEND_URL + "/api/user/login/", {
          method: "POST",
          headers: {
            // Authorization: "Bearer" + localStorage.getItem("token"),
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
        const response = await fetch(
          process.env.BACKEND_URL + `/api/message/${horseId}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer" + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
      },

      //getUser: async () => {
      //  const response = await fetch(process.env.BACKEND_URL + "api/user", {
      //    method: "GET",
      //    headers: {
      //      //"Authorization": "Bearer" + localStorage.getItem("token"),
      //      "Content-type": "application/json",
      //    },
      //  });
      //  const data = await response.json();
      //  return data;
      //},

      editUser: async (userId) => {
        const response = await fetch(
          process.env.BACKEND_URL + `api/user/${userId}`,
          {
            method: "PUT",
            headers: {
              "Authorization": "Bearer" + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
      },

      //deleteUser: async (userId) => {
      //  const response = await fetch(
      //    process.env.BACKEND_URL + `api/user/delete/${userId}`,
      //    {
      //      method: "DELETE",
      //      headers: {
      //        Autorization: "Bearer" + localStorage.getItem("token"),
      //        "Content-type": "aplication/json",
      //      },
      //    }
      //  );
      //  const data = await response.json();
      //  return data;
      //},

      getHorse: async () => {
        const response = await fetch(process.env.BACKEN_URL + "/api/horse", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        return data;
      },

      addHorse: async () => {
        const response = await fetch(process.env.BACKEND_URL + "api/horse", {
          method: "POST",
          headers: {
            "Authorization": "Bearer" + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        return data;
      },

      editHorse: async (horseId) => {
        const response = await fetch(
          process.env.BACKEND_URL + `api/horse/${horseId}`,
          {
            method: "PUT",
            headers: {
              "Authorization": "Bearer" + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data;
      },

      detleteHorse: async (horseId) => {
        const response = await fetch(
          procsess.env.BACKEND_URL + `api/horse/${horseId}`,
          {
            method: "DELETE",
            headers: {
              "Authorization": "Bearer" + localStorage.getItem("token"),
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
