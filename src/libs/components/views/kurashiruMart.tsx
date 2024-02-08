import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import kurashiruMart from "assets/images/kurashiru_mart_cover.jpeg"
import { Box } from "@mui/system"
import pointLottery from "../../../assets/images/kurashiru_mart_point_lottery.webp"
import lotteryGif from "../../../assets/images/lottery.gif"
import heroScreens from "../../../assets/images/kurashiru_mart_hero_screens.png.webp"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

function KurashiruMart(): React.ReactElement {
  const { t } = useTranslation()
  const articleImage = (
    imageSrc: string,
    alt: string,
    style?: React.CSSProperties
  ) => {
    return (
      <img src={imageSrc} alt={alt} style={{ maxWidth: "100%", ...style }} />
    )
  }
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  return (
    <IntroduceWorkArticle
      title="Kurashiru Mart (2022)"
      subTitle={t(
        "Shop the Best, Skip the Rest – Your Online Grocery Revolution"
      )}
      imageSrc={kurashiruMart}
    >
      <StyledParagraph variant="body1">
        {t("short_descripton_kurashiru_mart_01")}
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Role")}</Typography>
      </Box>
      <StyledParagraph variant="body1">{t("UI/UX Designer")}</StyledParagraph>
      <StyledParagraph variant="body1">
        {t("Front-end engineer")}
      </StyledParagraph>
      <StyledParagraph variant="body1">{t("Project manager")}</StyledParagraph>
      <StyledParagraph variant="body1">{t("Scrum master")}</StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Tools")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Figma, Visual Studio Code, SourceTree, Xcode
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Skills")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("UI/UX Design")}, {t("Graphic Design")},
        {t("Project management (scrum)")}, {t("Front-end engineering")},
        (ReactNative, TypeScript), Git (GitHub)
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Challenges")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("kurashiru_mart_article_paragraph_01")}
      </StyledParagraph>
      {articleImage(
        heroScreens,
        "Various screens from Kurashiru Mart presented in a random manner."
      )}
      <StyledParagraph variant="body1">
        {t("kurashiru_mart_article_paragraph_02")}
      </StyledParagraph>
      {articleImage(
        pointLottery,
        "Point lottery system. Customer can draw a lottery every day to get a point."
      )}
      <StyledParagraph variant="body1">
        {t("kurashiru_mart_article_paragraph_03")}
      </StyledParagraph>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        {articleImage(
          lotteryGif,
          "Point lottery system. Customer can draw a lottery every day to get a point."
        )}
        <Box mb={1} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"stretch"}
          justifyContent={"flex-start"}
        >
          <Typography variant="caption">
            {t("This view was designed an coded by Wecken in React Native")}
          </Typography>
          <Typography variant="caption">
            {t(
              "Wecken aimed to provide a fun and native-app-like experience with the lottery feature. To achieve this, he utilized the device's motion sensor to facilitate the lottery drawing."
            )}
          </Typography>
        </Box>
      </Box>
    </IntroduceWorkArticle>
  )
}

export default KurashiruMart
