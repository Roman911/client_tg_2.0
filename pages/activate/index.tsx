import type { NextPage } from 'next'
import React from "react"
import { Typography } from '@mui/material'
import { MainLayouts } from "../../layouts"

const PostActivate: NextPage = () => {
  return <MainLayouts>
    <Typography variant="h2" gutterBottom component="div">Реєстрація</Typography>
    <Typography variant="body1" gutterBottom>
      Реєстрація пройшла успішно! Вам було надіслано листа з посиланням на активацію для підтвердження існування введеної Вами адреси.
    </Typography>
    <Typography variant="body1" gutterBottom>
      Перевірте свою пошту протягом декількох хвилин, і якщо Ви не отримали листа з посиланням на активацію.
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      З найкращими побажаннями,
    </Typography>
    <Typography variant="body1" gutterBottom>
      Команда travelguide.space
    </Typography>
  </MainLayouts>
}

export default PostActivate