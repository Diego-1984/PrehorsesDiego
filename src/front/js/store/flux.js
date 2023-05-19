const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      messages: [],
      horses: [],
      ganaderia:[ "ALMA CASTIZA",
      "ALONSO CARRERO PALACIOS",
      "ALVARO ALVAREZ REDONDO",
      "AMIGO SANCHEZ",
      "ANA BELEN DIAZ RAMIREZ",
      "ANA ECHAVE MARCO",
      "ANA FUENTES",
      "ANDRES CABRERA MONTERO",
      "ANDRES CANOVAS RODRIGUEZ",
      "ANDRES HOLGADO DIANEZ",
      "ANDRES MOYA RICO",
      "ANGEL ADIN RODRIGUEZ PEINADO",
      "ANGEL BALLESTEROS MONDEJAR",
      "ANGEL BOHORQUEZ MARTINEZ",
      "ANGEL CANTOS GARCIA",
      "ANGEL FERNANDEZ RODRIGUEZ",
      "ANGEL GONZALEZ FERNANDEZ",
      "ANGEL RECUERO RIVERO",
      "ANICETO FERNANDEZ ORDAS",
      "ANNE KRISTIINA KORTETMAKI",
      "ANTIGUA LINEA DEL BOCADO",
      "ANTONIO ABAD BLANCO PRIETO",
      "ANTONIO ACEDO DOMINGUEZ",
      "ANTONIO BAENA ARIZA",
      "ANTONIO BARCELO ARTIGUES",
      "ANTONIO BERENGUER HURTADO",
      "ANTONIO BERRIO BUENO",
      "ANTONIO BRAVO ASSENSIO",
      "ANTONIO CAMPOS CABELLO",
      "ANTONIO CARRILLO BAEZA",
      "ANTONIO CORTES RODRIGUEZ",
      "ANTONIO CRESPO NOGAL",
      "ANTONIO CUENCA DELGADO",
      "ANTONIO DIOSDADO GALAN",
      "ANTONIO DOMINGUEZ RUBIO",
      "ANTONIO DOMINGUEZ SANCHEZ",
      "ANTONIO FERNANDEZ MONTERO",
      "ANTONIO FERRIOL GELABERT",
      "ANTONIO GARCIA BENITEZ",
      "ANTONIO GARCIA MORENO",
      "ANTONIO GOMEZ CABEZAS",
      "ANTONIO GUIRAL GUARGA",
      "ANTONIO HIDALGO HIDALGO",
      "ANTONIO HURTADO QUINTANILLA",
      "ANTONIO IGNACIO CASTRO PEREZ"],
      token: ''
    },
    actions: {
      setUser: (user) => {
        setStore({ ...getStore(), user });
      },
      setMessages: (messages) => {
        setStore({ ...getStore(), messages });
      },
      addHorse: (horse) => {
        const store = getStore()
        setStore({ ...store, horses: [...store.horses, horse] });
      },
      setHorses:(horses) =>{
        setStore({...getStore(), horses})
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
				return data
				
			},

      loginUser: (user) => {
        fetch(`${process.env.BACKEND_URL}/api/user/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user)
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("token", data.token);
              setStore({...getStore(), token: data.token})
              setStore({...getStore(), user: data.user})
            } else {
              console.log(data);
            }
          });
      },

      clearToken: () => {
        setStore({...getStore(), token: ''})
        localStorage.removeItem('token')
      },

      clearMessages: () => {
        setStore({ ...getStore(), messages: [] });
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
        setStore({...getStore(), messages})
        return messages;
      },

      postMessage:async(text, horseId, userOwnerId, dateTime) =>{
       return fetch(`${process.env.BACKEND_URL}/api/message`,
        {
          method: "POST",
          headers : {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
          body : JSON.stringify({text, horseId, userOwnerId, dateTime})
        });
      },

      postUserOwnerMessage:async(text, horseId, userInterestedId, dateTime) =>{
        return fetch(`${process.env.BACKEND_URL}/api/user-owner/message`,
         {
           method: "POST",
           headers : {
             Authorization: "Bearer " + localStorage.getItem("token"),
             "Content-type": "application/json",
           },
           body : JSON.stringify({text, horseId, userInterestedId, dateTime})
         });
       },

      getOneUser: async () => {
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/oneUser`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const user = await response.json()
        setStore({...getStore(), user})
      },

      editUser: async(user) => {
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/editUser`,
          {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
            body: JSON.stringify(user) 
          }
        );
        const data = await response.json();
        getActions().setUser(data)
      },

      clearHorses:() => {
        setStore({ ...getStore(), horses: [] });
      },

      getHorses: async () => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/horse`,{
					method : "GET",
					headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
				})
				const horses = await response.json()
        setStore({...getStore(), horses})
      },

      getMyHorses: async () => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/user/horse`,{
					method : "GET",
					headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
				})
				const horses = await response.json()
        setStore({...getStore(), horses})
      },

      addHorse: async (horse) => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/horse`, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
          body: JSON.stringify(horse)
        });
        const data = await response.json();
        const store = getStore()
        setStore({ ...store, horses: [...store.horses, horse] });
        console.log(store)
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