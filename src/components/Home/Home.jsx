import React from 'react';
import Input from '../Input';


const Home = ({Submit, Change, stateinput, componentDisplay, modalDisplay}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-white">
                        <div className="card-body">
                            <form className='inputform ' onSubmit={Submit}>
                                <Input inputType='text' inputEvent={Change} inputClass="form-control add-task col-8" value={stateinput} />
                            </form>
                            <ul className="nav nav-pills todo-nav">
                                <li role="presentation" className="nav-item all-task active"><a href="/All" className="nav-link">All</a></li>
                                <li role="presentation" className="nav-item active-task"><a href="/Active" className="nav-link">Active</a></li>
                                <li role="presentation" className="nav-item completed-task"><a href="/Completed" className="nav-link">Completed</a></li>
                            </ul>
                            <div className="todo-list">
                                { componentDisplay }
                                { modalDisplay }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;