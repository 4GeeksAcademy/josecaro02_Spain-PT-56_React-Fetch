
import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//logica
	const [todos, setTodos] = useState([])
	// se ejecuta la accion cada vez que se renderiza el componente
	/*
	useEffect(()=>{
		// se ejecuta una accion
	})
	*/

	//  se ejecuta la accion una sola vez
	/*
	useEffect(()=>{
		// se ejecuta una accion
	}, [])
	*/

	// se ejecuta una accion cuando se carga el componente y cada vez que una variable se actualiza
	/*
	useEffect(()=>{
		// se ejecuta accion
	},[variable1, variable2 , variable3])
	*/



	const urlTodos = "https://playground.4geeks.com/apis/fake/todos/user/josecaro02"
	//POST
	//peticion
	useEffect(() => {
		fetch(urlTodos, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => { return response.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { return err })
	}, [])


	function addNewTask() {
		let newTodo = {
			label: "estudiar los hooks",
			done: false
		}
		setTodos([...todos, newTodo])
		fetch(urlTodos, {
			method: "PUT",
			body: JSON.stringify([...todos, newTodo]),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => { return response.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { err })

	}

	useEffect(() => {
		// GET Todos
		//GET si solo se pone la url en el fetch él asume que es un metodo GET
		fetch(urlTodos)
			.then((response) => {
				return response.json()
			})
			.then((data) => { setTodos(data) })
			.catch((err) => { return err })
	}, [todos])



	return (
		<div className="text-center">
			{todos.map((todos) => {
				return <h3>{todos.label}</h3>
			})}
			<button className="btn btn-success" onClick={addNewTask}>Agregar nueva tarea</button>
		</div>
	);
};

export default Home;
