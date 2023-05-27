export function UserParticipation(props){
    const handleSelect = (id)=>{
        props.setSelectedId(id)
    }
    const handleSubmit = ()=>{
        props.voted()
    }
    return <>
        <h1>Answer Choices: </h1>
        {props.choices&&props.choices.map(obj=><div onClick={()=>handleSelect(obj.id)} style={{border:"2px solid black", padding:"2px", margin:"2px", background:props.selectedId==obj.id?"green":""}}>{obj.label}</div>)}
        {props.selectedId!=0&&!props.showThankYou&&<button onClick={handleSubmit}>Vote</button>}
    </>
}