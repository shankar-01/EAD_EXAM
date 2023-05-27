export function PolllDisplay(props){
    
    return (<>
    <h2>{props.question}</h2>
    {props.choices&&props.choices.map(obj=>{
        return <>
            <label><input type="radio" value={obj.label} onClick={()=>{props.handleSelect(obj.id)}}/> {obj.label}</label><br/>
        </>
    })}
    </>)
}