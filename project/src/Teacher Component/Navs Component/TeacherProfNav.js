import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const TeacherProfNav = () => {
    const params = useParams();
    let tid = params.tid;
    let link = "/teachers/LECTURER/" + tid
    let AttendenceLink = "/teachers/LECTURER/" + tid + "/attendance";
    let SubjectLink = "/teachers/LECTURER/" + tid + "/subjectAttendance";
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={link}><i className="fas fa-chalkboard-teacher"></i> Professor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={link}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={AttendenceLink}>Attendance Report</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={SubjectLink}>Mark Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
