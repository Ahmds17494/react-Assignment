import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid py-5">
            <div className="row">

            <div className="col-3 offset-1 d-flex align-items-start
            justify-content-center flex-column">
                <ul className="p-0">
                    <li className="d-inline-block me-4"><a href="#">About</a></li>
                    <li className="d-inline-block me-4"><a href="#">Contact</a></li>
                    <li className="d-inline-block me-4"><a href="#">Terms of Use</a></li>
                    <li className="d-inline-block me-4"><a href="#">Privacy Policy</a></li>
                </ul>
                <p style={{fontSize:'80%'}}>© Your Website 2021. All Rights Reserved.</p>
            </div>

            <div className="col-1 offset-5 d-flex justify-content-between">
                <a href="#"><i class="fab fa-facebook fs-3"></i></a>
                <a href="#"><i class="fab fa-twitter fs-3"></i></a>
                <a href="#"><i class="fab fa-instagram fs-3"></i></a>
            </div>

            </div>
        </div>
    )
}
