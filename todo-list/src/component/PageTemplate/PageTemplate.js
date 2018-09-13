import React, {Component} from 'react';
// import './main.css';

const PageTemplate = ({children}) =>{
    return (
        <div className="pageTemplate">
            <h1>일정관리</h1>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;