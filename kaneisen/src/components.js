import React, { useState } from 'react';
import { FaPlus, FaCog, FaCircle, FaRegQuestionCircle } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
// import { RiFontSize } from "react-icons/ri";
import { IoClose, IoInvertModeOutline, IoLanguage } from "react-icons/io5";
// FaKeyboard
// MdDashboard
// MdMode edit icon



export function ModalSettings({ isOpen, onClose }) {
    return (
        <div class="modal-background" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-header">
                    <h1>
                        Settings
                    </h1>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
                <div class="modal-section">
                    <button class="settings-option">
                        <IoInvertModeOutline />
                        <p class="modal-subtitle settings-option">
                            Theme
                        </p>
                        <p class="modal-text">
                            Customize visual style of the interface.
                        </p>
                    </button>
                </div>
                {/* <div class="modal-section">
                    <button class="settings-option">
                        <RiFontSize />
                        <p class="modal-subtitle">
                            Font-Size
                        </p>
                        <p class="modal-text">
                            Adjust the text size for better readability and visual appeal.
                        </p>
                    </button>
                </div> */}
                {/* <div class="modal-section">
                    <button class="settings-option">
                        <FaKeyboard />
                        <p class="modal-subtitle">
                            Shortcuts
                        </p>
                        <p class="modal-text">
                            Customize and define their preferred keyboard shortcuts for various actions.
                        </p>
                    </button>
                </div> */}
                <div class="modal-section">
                    <button class="settings-option">
                        <IoLanguage />
                        <p class="modal-subtitle">
                            Language
                        </p>
                        <p class="modal-text">
                            Choose your preferred language for the user interface.
                        </p>
                    </button>
                </div>
                <div class="modal-section">
                    <button class="settings-option">
                        <FaRegQuestionCircle />
                        <p class="modal-subtitle">
                            About
                        </p>
                        <p class="modal-text">
                            Relevant information about the application.
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ModalNewTask({ isOpen, onClose }) {
    const [status, setStatus] = useState('Empty');

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const [category, setCategory] = useState('Empty');
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="modal-background" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content">
                <div className="modal-header">
                    <input id="task-name" type='text' defaultValue={"Untitled"} lang="en" spellCheck="true"/>
                    <span className="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
                <div className="modal-section">
                    <div id="task-status">
                        <p className="modal-subtitle">
                            Status
                        </p>
                        <div className="dropdown">
                            <button className="dropbtn">
                                <FaCircle />
                                <span>{status}</span>
                            </button>
                            <div className="dropdown-content">
                                <button id="activity-status" class="modal-task-status" onClick={() => handleStatusChange('Not Started')}>
                                    <FaCircle />
                                    Not Started
                                </button>
                                <button onClick={() => handleStatusChange('In Progress')}>
                                    <FaCircle />
                                    In Progress
                                </button>
                                <button onClick={() => handleStatusChange('Completed')}>
                                    <FaCircle />
                                    Completed
                                </button>
                            </div>
                        </div>
                        <p className="modal-subtitle">
                            Category
                        </p>
                        <div className="dropdown">
                            <button className="dropbtn">
                                <FaCircle />
                                <span>{category}</span>
                            </button>
                            <div className="dropdown-content">
                                <button onClick={() => handleCategoryChange('Do it now')}>
                                    <FaCircle />
                                    Do it now
                                </button>
                                <button onClick={() => handleCategoryChange('Decide')}>
                                    <FaCircle />
                                    Decide
                                </button>
                                <button onClick={() => handleCategoryChange('Delegate')}>
                                    <FaCircle />
                                    Delegate
                                </button>
                                <button onClick={() => handleCategoryChange('Delete')}>
                                    <FaCircle />
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="modal-section">
                    <p className="modal-subtitle">
                        Description:
                    </p>
                </div>

                <div className="modal-section">
                    <textarea id="task-description" rows="4" cols="50" lang="en" spellCheck="true">
                        Empty
                    </textarea>
                </div>
                <div className="button-section">
                    <button className="save-button">
                        Save
                    </button>
                    {/* <button className="delete-button">
                        Delete
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export function ModalMatrix({ isOpen, onClose }) {
    return (
        <div class="modal-background" style={{ display: isOpen ? 'block' : 'none' }}>
            <div class="modal-content">
                <div class="modal-header">
                    <input id="task-name" type='text' defaultValue={"Untitled"} lang="en" spellcheck="true"/>
                    <span class="close-modal" onClick={onClose}>
                        <IoClose />
                    </span>
                </div>
            </div>
        </div>
    );
}

export function ActionMenu() {
    const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [matrixModalOpen, setMatrixModalOpen] = useState(false);

    const openNewTaskModal = () => {
        setNewTaskModalOpen(true);
    };

    const closeNewTaskModal = () => {
        setNewTaskModalOpen(false);
    };

    const openSettingsModal = () => {
        setSettingsModalOpen(true);
    };

    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const openMatrixModal = () => {
        setMatrixModalOpen(true);
    };

    const closeMatrixModal = () => {
        setMatrixModalOpen(false);
    };

    return (
        <section id="header">
            <div id="action-menu">
                <button class="action-button" onClick={openNewTaskModal}>
                    <FaPlus />
                </button>
                <button class="action-button" onClick={openMatrixModal}>
                    <MdDashboardCustomize />
                </button>
                <button class="action-button" onClick={openSettingsModal}>
                    <FaCog />
                </button>
            </div>
            <ModalNewTask isOpen={newTaskModalOpen} onClose={closeNewTaskModal} />
            <ModalSettings isOpen={settingsModalOpen} onClose={closeSettingsModal} />
            <ModalMatrix isOpen={matrixModalOpen} onClose={closeMatrixModal} />
        </section>
    );
}

export function TaskStatusSection(){
    return (
        <section id="taskStatusSection">
            <div class="listSpace">
                <div class="task-status-title" id="not-started-title">
                    <FaCircle />
                    <p>
                        Not Started
                    </p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="in-progress-title">
                    <FaCircle />
                    <p>
                        In Progress
                    </p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="done-title">
                    <FaCircle />
                    <p>
                        Done
                    </p>
                </div>
            </div>
        </section>
      );
}