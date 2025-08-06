import React, { useEffect } from 'react'

function ProfileUrl() {

    useEffect(() => {
        window.location.href = "http://localhost:5173/profile";
    }, [])

    return (
        <div>
            This is ProfileUrl Page
        </div>
    )
}

export default ProfileUrl