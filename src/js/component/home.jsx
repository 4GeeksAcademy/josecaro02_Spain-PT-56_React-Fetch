
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//logica
	const [todos, setTodos] = useState([])

	//peticion   resultado   data

	//GET si solo se pone la url en el fetch él asume que es un metodo GET
	const urlTodos = "https://playground.4geeks.com/apis/fake/todos/user/josecaro02"
	fetch(urlTodos)
	.then((response)=>{
		return response.json()
	})
	.then((data)=>{setTodos(data)})
	.catch((err)=>{return err})


	//POST
	//peticion
	fetch(urlTodos, {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((response)=>{return response.json()})
	.then((data)=>{console.log(data)})
	.catch((err)=>{return err})

	//PUT
	let body = [
		{
			done: false,
			label: "barrer casa"
		},
		{
			done: false,
			label: "pasear perro"
		},
		{
			done: false,
			label: "lavar ropa"
		}
	]
	fetch(urlTodos, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((response)=>{return response.json()})
	.then((data)=>{console.log(data)})
	.catch((err)=>{err})


	return (
		<div className="text-center">
			{todos.map((todos)=>{
				return <h3>{todos.label}</h3>
			})}
		</div>
	);
};

export default Home;
