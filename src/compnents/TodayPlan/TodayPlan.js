import React from "react";
import Plan from "./TodayPlan-Plan";

class TodayPlan extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],
        text:''};
    }

    handleChange= e =>{
        this.setState({text:e.target.value});
    }

    handleAdd = e =>{
        if(this.state.text !== ""){
            const items = [...this.state.items, this.state.text];
            this.setState({items:items , text:""});
        }
    }

    handleDelete = id =>{
        const oldItems = [...this.state.items];
        const items = oldItems.filter((element , i) =>{
            return i !== id
        });
        this.setState({items: items});
    }
    render(){
        return(
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-white today-plan-title shadow-lg p-3">
                        <h1 className="text-center">Today's plan</h1>
                    
                            <div className="row">
                                <div className="col-9">
                                    <input type="text" className="form-control" 
                                    placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange}/>
                                </div>

                                <div className="col-2">
                                    <button className="btn btn-warning px-5 
                                    font-weight-bold" onClick={this.handleAdd}>Add</button>
                                </div>
                            </div>

                            <div className="container-fluid">
                                <ul className="list-unstyled row m-5">
                                  {
                                    this.state.items.map((value,i)=>{
                                        return <Plan key={i} value={value} id={i} sendData={this.handleDelete}/>
                                    }
                                        
                                    )
                                  }

                                </ul>
                            </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TodayPlan;