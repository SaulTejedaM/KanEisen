import React from "react";
import ReactDOM from "react-dom";
import { TaskStatusSection, ActionMenu } from "./components";
import './styles.css';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
    <>
        <ActionMenu/>
        <TaskStatusSection/>
    </>
)