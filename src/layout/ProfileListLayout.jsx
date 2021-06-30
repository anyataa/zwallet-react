import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Dashboard from '../component/Dashboard'
import { Footer } from '../component/Footer'
import { ModalStatus } from '../component/ModalStatus'
import NavBar from '../component/NavBar'
import AddPhone from './AddPhone'
import ChangePassword from './ChangePassword'
import ChangePin from './ChangePin'
import ManagePhone from './ManagePhone'
import { PersonalInfoLayout } from './PersonalInfoLayout'
import { ProfilLayout } from './ProfilLayout'

const ProfileListLayout = () => {
  const { path } = useRouteMatch()

  const [modalToggle, setModalToggle] = useState(false)
  const [activity, setActivity] = useState('')

  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <Switch>
        <Route path={`${path}`} component={ProfilLayout} exact/>
        <Route path={`${path}/personalinfo`} component={PersonalInfoLayout} exact/>
        <Route path={`${path}/changePassword`} component={ChangePassword} />
        <Route path={`${path}/changePin`} component={ChangePin} />
        <Route path={`${path}/managephone`} component={ManagePhone} />
        <Route path={`${path}/addPhone`} render={(props) => <AddPhone {...props} setDisplay={() => setModalToggle(prevState => !prevState)} display={modalToggle}/>} />
      </Switch>
      <ModalStatus setDisplay={() => setModalToggle(prevState => !prevState)} display={modalToggle} activity={activity} ></ModalStatus> 

      <Footer />
    </div>
  )
}

export default ProfileListLayout
