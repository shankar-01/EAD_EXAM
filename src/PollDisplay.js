export function PolllDisplay(props){
    
    return (<>
    <h2>Poll Question:{props.question}</h2>
    <h3>Answer Choices with Vote Counts:</h3>
    {props.choices&&props.choices.map(obj=>{
        return <>
            <p>{obj.label} : {obj.votes} votes</p>
        </>
    })}
    </>)
}