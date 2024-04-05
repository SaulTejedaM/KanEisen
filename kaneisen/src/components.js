import React, { useState } from 'react';
import { FaPlus, FaCog, FaCircle } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import { IoClose } from "react-icons/io5";
// MdDashboard

export function ModalSettings({ isOpen, onClose }) {
    return (
        <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close-modal" onClick={onClose}>
                    <IoClose />
                </span>
                <h1>Settings</h1>
            </div>
        </div>
    );
}



export function ActionMenu() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id="titleSection">
            <div id="action-menu">
                <button className="action-button">
                    <FaPlus />
                </button>
                <button className="action-button">
                    <MdDashboardCustomize />
                </button>
                <button id="myBtn" className="action-button" onClick={openModal}>
                    <FaCog />
                </button>
            </div>
            <ModalSettings isOpen={modalOpen} onClose={closeModal} />
        </section>
    );
}

export function TaskStatusSection(){

    return (
        <section id="taskStatusSection">
            <div class="listSpace">
                <div class="task-status-title" id="not-started-title">
                    <FaCircle />
                    <p>Not Started</p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="in-progress-title">
                    <FaCircle />
                    <p>In Progress</p>
                </div>
            </div>
            <div class="listSpace">
                <div class="task-status-title" id="done-title">
                    <FaCircle />
                    <p>Done</p>
                </div>
            </div>
        </section>
      );
}