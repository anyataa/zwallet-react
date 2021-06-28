import React from 'react'
import Dashboard from '../component/Dashboard'
import { Footer } from '../component/Footer'
import NavBar from '../component/NavBar'

export const ProfilLayout = () => {
    return (
        <div className="container">
            <Dashboard></Dashboard>
            <NavBar></NavBar>
            <div className="right">
                <div className="profile-page-container">
                <div class="profile-top-container">
          <div class="margin-profile-container">
            <div class="profile-img-detail">
              <div class="img-edit">
                <img src="./../Assets/profil2.png" alt="" />
                <p onclick="goToPersonalInfo() " class="fa fa-pencil-alt col-grey">&nbsp;&nbsp; <span> Edit</span> </p>
              </div>

              <div class="img-edit col-dark-grey">
                <h1 class="col-dark-grey">Robert Chandler</h1>
                <h2 class="col-grey">+62 813-9387-7946</h2>
              </div>
            </div>
          </div>
        </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
