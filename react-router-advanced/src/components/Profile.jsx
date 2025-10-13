import React from 'react'

function Profile() {
  return (
    <>
       <Routes>
            <Route path="/profile/details" element={<ProfileDetails />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
        </Routes>
    </>
  )
}

export default Profile;