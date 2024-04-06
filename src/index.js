import React from "react";
import { createRoot } from "react-dom/client";
import { TaskStatusSection, ActionMenu } from "./components";
import './styles.css';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
    <>
        <ActionMenu/>
        <TaskStatusSection/>
    </>
);
