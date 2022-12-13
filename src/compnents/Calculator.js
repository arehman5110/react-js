import React, { useState } from "react";
// import "./Calculator.css";


const Calculator =()=>{
    const [result, setResult] = useState('');

    const handleClick =(e)=> {
        if (setResult === "Error"){
            setResult('');
            
        }
        setResult(result.concat(e.target.name));
        
    }

    const clear =(e)=> {
        setResult("");
    }

    const backspace =(e)=> {
        setResult(result.slice(0,result.length -1));
    }

    const calculate = (e) =>{
        try{
        setResult(eval(result).toString());
        }catch(err){
            setResult("Error");
        }
    }

  

    return(
        <>
        <div className="calculator-bg">
            <div className="container calculator col-md-4 m-3">
                   <div className="row">
                <form>
                    <input className="calculator-input" type="text"  value={result}  />
                </form>
                 
               

                <div className="keypad">
                    
                    <button className="highlight" onClick={clear} id="clear">Clear</button>
                    <button className="highlight " onClick={backspace} id="backSpace">C</button>
                    <button className="highlight " name="/" onClick={handleClick} >&divide;</button>
                    <button name="7" className="" onClick={handleClick}>7</button>
                    <button name="8" className="" onClick={handleClick}>8</button>
                    <button name="9" className="" onClick={handleClick}>9</button>
                    <button className="highlight " name="*" onClick={handleClick}>&times;</button>
                    <button name="4" className="" onClick={handleClick}>4</button>
                    <button name="5" className="" onClick={handleClick}>5</button>
                    <button name="6" className="" onClick={handleClick}>6</button>
                    <button className="highlight " name="-" onClick={handleClick}>&ndash;</button>
                    <button name="1" className="" onClick={handleClick}>1</button>
                    <button name="2" className="" onClick={handleClick}>2</button>
                    <button name="3" className="" onClick={handleClick}>3</button>
                    <button className="highlight " name="+" onClick={handleClick}>+</button>
                    <button name="0" className="" onClick={handleClick}>0</button>
                    <button name="." className="" onClick={handleClick}>.</button>
                    <button className="highlight " name="=" onClick={calculate} id="result">=</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;