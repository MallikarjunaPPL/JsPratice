
import "./index.css"
import updatedComp from "../WithHOC/index"

const Fields = (props) => {
    console.log('propsssss==',props)

        

    return (
        <div>
             <form onSubmit={props.SubmitForm}>
                       
                        <input className='inp_style' type="text" value={props.inpval.name} onChange={props.nameChange} placeholder='Enter your Name'/>
                        <input className='inp_style' type="mail" value={props.inpval.mail} onChange={props.mailChange} placeholder='Enter Your Mail'/>
                      
                        <button className='btn' onClick={props.SubmitForm} >Show Results</button>
                        {props.newLi.map((item)=>(
                            <div>
                                  <h1>{item.new_name}</h1>
                                  <h1>{item.new_mail}</h1>
                                  <button onClick={props.clearItems}>Clear</button>
                            </div>
                        ))}
                        </form>
        </div>
    );
};

export default  updatedComp(Fields);