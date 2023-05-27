export function UserParticipation(props){
    const handleSelect = ()=>{

    }
    return <>
        <h1>Answer Choices: </h1>
        {props.choices&&props.choices.map(obj=><div onClick={handleSelect}>{obj.label}</div>)}
    </>
}