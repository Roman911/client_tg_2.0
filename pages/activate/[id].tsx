import type { NextPage } from 'next'
import React from "react"
import { useRouter } from "next/router"
import { Typography } from '@mui/material'
import { MainLayouts } from "../../layouts"

const Activate: NextPage = () => {
  const router = useRouter()
  const link = router.query.id

  return <MainLayouts>
    <Typography variant="h4" gutterBottom component="div">
      Реєстрація пройшла успішно, перед Вами відкриваються нові можливості!
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      Вітаю Roman Lee!
    </Typography>
    <Typography variant="body1" gutterBottom>
      Вітаю з реєстрацією на travelguide, який є місцем зустрічі людей які неможуть уявити своє життя без подорожей.
    </Typography>
    <Typography variant="body1" gutterBottom>
      Заповнюйте інформацію про себе http://travelguide.space/user, завантажуйте свою аватару та поділіться своїми цікавими локаціями http://travelguide.space/create-location, та стаєте новим учасником спільноти travelguide.space.
    </Typography>
    <Typography variant="body1" gutterBottom>
      А якщо виникнуть питання, уточнення чи побажання, пишіть мені.
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      Я з радістю відповім.
    </Typography>
    <Typography variant="body1" gutterBottom>
      roma-lysyk@ukr.net
    </Typography>
  </MainLayouts>
}

export default Activate