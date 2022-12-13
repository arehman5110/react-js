import React from "react";


function Form(){
    function handleSubmit(e){
        e.preventDefault();
        console.log('You Clicked on Submit Button.');
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;