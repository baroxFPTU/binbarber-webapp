import { useTitle } from 'hooks/useTitle'
import React, { useEffect } from 'react'

function Profile() {
  const { onUpdateTitleAndDescription, reset } = useTitle()

  useEffect(() => {
    onUpdateTitleAndDescription('Tôi', 'Thông tin của bạn')

    return () => {
      reset()
    }
  }, [])

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus delectus, veritatis
        est amet blanditiis expedita nihil mollitia vitae velit atque saepe quibusdam id. Nulla
        libero culpa repellendus vero rem sequi?
      </p>
    </div>
  )
}

export default Profile
