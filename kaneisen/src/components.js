import { FaPlus, FaCog, FaCircle } from 'react-icons/fa';

import { MdDashboardCustomize, MdDashboard  } from "react-icons/md";

export function ActionMenu(){
    return (
        <section id="titleSection">
            <div id="action-menu">
                <button class="action-button">
                    <FaPlus/>
                </button>
                <button class="action-button">
                    <MdDashboardCustomize/>
                </button>
                <button class="action-button">
                    <FaCog/>
                </button>
            </div>
            {/* <div id="title">
                <MdDashboard/>
                <h1>
                    KanEisen
                </h1>
            </div> */}
        </section>
      );
}

export function modalEditTask(){
    return(
        <section>
            <div>
                <h1>

                </h1>


            </div>



        </section>
    )
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


