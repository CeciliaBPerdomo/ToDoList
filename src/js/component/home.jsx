import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]); 
	//const [Eliminados, setEliminado] = useState([])
	
	function envioTarea(e){
		if(e.key === 'Enter'){
			e.preventDefault()
			//setLista(Lista.concat(Tarea));
			setLista([...lista, tarea])
			setTarea("")
		}
	}

	function eliminar(id){ 
		let eliminados = []
		eliminados = lista.filter((item, index) => {
			if (index !== id){
				return item
			}
		})
		setLista(eliminados)
	}

	return (
		<div style={{margin: "15px"}}>
			<div>	
				<input className="form-control" 
				type="text" 
				value={tarea}
				onChange={(e) => setTarea(e.target.value)}
				onKeyPress={envioTarea}>
				</input>
			</div>

			<ul className="list-group">
				{lista.map((item, id) => (<li className="list-group-item" key={id}>{item} 
				<button onClick={() => eliminar(id)} type="button" 
				className="btn btn-outline-secondary float-end">Chau!</button>
				</li>))}	
			</ul>
		</div>

	);
};

export default Home;
