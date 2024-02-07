import React from "react"
import kyoto from "assets/images/shorenin.jpg"
import { Box, ButtonBase, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import worksCover from "assets/images/works_cover_image.png"
import zennLogo from "assets/images/icon_zenn_symbol_logo.svg"
import noteLogo from "assets/images/icon_note_symbol_logo.svg"
import xLogo from "assets/images/icon_x_symbol_logo.svg"
import linkedinLogo from "assets/images/icon_linkedin_symbol_logo.svg"
import { useNavigate } from "react-router-dom"

function About(): React.ReactElement {
  const { t } = useTranslation()

  const CoverImage = () => {
    return <img src={kyoto} alt={"Kyoto"} style={{ maxWidth: "100%" }} />
  }

  const SNSButton = (
    img: string,
    color: string,
    title: string,
    url: string
  ) => {
    const StyledButton = styled(ButtonBase)`
      padding: 16;
      width: 100%;
      background-color: ${color};
      border-radius: 4px;
      margin: 8px 0;
      min-height: 44px;
      max-width: 330px;
      text-transform: none;
      align-self: center;
    `
    const StyledTypography = styled(Typography)`
      color: #fff;
      margin-left: 8px;
      text-transform: none;
    `
    return (
      <StyledButton onClick={() => window.open(url)}>
        <img src={img} alt="brand logo"></img>
        <StyledTypography variant="button">{title}</StyledTypography>
      </StyledButton>
    )
  }

  const Tag = (text: string) => {
    const StyledTypography = styled(Typography)`
      color: #fff;
      text-transform: none;
    `
    const StyledDiv = styled.div`
      background-color: #000;
      display: flex;
      border-radius: 40px;
      padding: 2px 8px;
    `
    return (
      <StyledDiv>
        <StyledTypography variant="body2">{text}</StyledTypography>
      </StyledDiv>
    )
  }

  const StyledCoverContainer = styled.div`
    position: relative;
  `

  const StyledWorksCoverContainer = styled(ButtonBase)`
    text-decoration: none;
    display: flex;
    position: relative;
    width: 100%;
    padding: 24px;
    height: 260px;
    background-color: #2c2c2c;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
  `

  const StyledCoverText = styled(Typography)`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.wecken.white.high};
  `
  const navigate = useNavigate()
  const onClickWorks = () => {
    navigate("/works/")
  }

  return (
    <Grid
      container
      // direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <StyledCoverContainer>
          <CoverImage />
          <StyledCoverText variant="h1">{t("About Wecken")}</StyledCoverText>
        </StyledCoverContainer>
      </Grid>
      <Grid
        display={"flex"}
        direction={"column"}
        wrap={"nowrap"}
        padding={2}
        item
        alignSelf={"center"}
        xs={12}
        md={6}
      >
        <Box mb={4}>
          <Typography variant="body1">
            {t(
              "Wecken is a Japan-based UI/UX designer, good at mobile app UI design with a good understanding of front end engineering. This web site is designed and coded by Wecken"
            )}
          </Typography>
        </Box>

        <Box mb={4} style={{ width: "100%" }}>
          <StyledWorksCoverContainer onClick={onClickWorks}>
            <img
              src={worksCover}
              alt={"Previous works"}
              style={{
                maxWidth: "100%",
                width: "200px",
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 0,
              }}
            />
            <Box
              width={"50%"}
              zIndex={1}
              padding={2}
              sx={{ backdropFilter: "blur(40px)" }}
            >
              <Typography
                variant="h2"
                color={"#fff"}
                textAlign={"left"}
                sx={{ textShadow: "#000000d4 0px 0px 2px;" }}
              >
                Works
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                textAlign={"left"}
                sx={{ textShadow: "#000000d4 0px 0px 2px;" }}
              >
                {t("Here are my previous works")}
              </Typography>
            </Box>
            <Box display={"flex"} flex={1} />
            <Typography variant="button" color={"#fff"}>
              {t("Show more")}
            </Typography>
          </StyledWorksCoverContainer>
        </Box>

        <Box
          mb={4}
          style={{ width: "100%" }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box mb={1}>
            <Typography variant="h2">{t("Blogs")}</Typography>
            <Box mb={1} />
            <Typography variant="body1">
              {t("I'm writing about UI design and front-end engineering")}
            </Typography>
          </Box>
          {SNSButton(
            noteLogo,
            "rgb(0, 0, 0)",
            "note",
            "https://note.com/wecken"
          )}
          {SNSButton(zennLogo, "#000000", "Zenn", "https://zenn.dev/wecken")}
        </Box>
        <Box mb={4}>
          <Typography variant="h2">{t("Skills")}</Typography>
          <Box mb={1} />
          <Typography variant="body1">
            {t("skill_explanation_paragraph_01")}
          </Typography>
          <Box mb={1} />
          <Typography variant="body1">
            {t("skill_explanation_paragraph_02")}
          </Typography>
          <Box mb={2} />
          <Box
            flexDirection={"row"}
            flexWrap={"wrap"}
            alignItems={"flex-start"}
            display={"flex"}
            gap={1}
          >
            {Tag("Figma")}
            {Tag("Photoshop")}
            {Tag("Illustrator")}
            {Tag("HTML/CSS")}
            {Tag("JavaScript")}
            {Tag("TypeScript")}
            {Tag("React")}
            {Tag("SwiftUI")}
            {Tag("Git")}
          </Box>
          <Box mb={1} />
        </Box>
        <Box mb={4}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h2">{t("Contacts")}</Typography>
              <Box mb={1} />
              <Typography variant="body1">
                {t(
                  "Wecken is currently working for a company that is offering consumer mobile app, and is also working on several UI design projects on the side project."
                )}
                {t(
                  "Please contact me if you need help with the following types of design work."
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {t("- Consulting UI design (for consumer and for business)")}
              </Typography>
              <Box mb={1} />
              <Typography variant="subtitle2">
                {t("- UI design mock-up creation using Figma")}
              </Typography>
              <Box mb={1} />
              <Typography variant="subtitle2">
                {t("- Consulting / Designing usability research")}
              </Typography>
              <Box mb={1} />
              <Typography variant="subtitle2">
                {t(
                  "- Consulting UI Design workshop, and holding online seminars"
                )}
              </Typography>
              <Box mb={1} />
              <Typography variant="subtitle2">
                {t(
                  "- Interpreting / Translating business English, especially IT domain"
                )}
              </Typography>
              <Box mb={1} />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ width: "100%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              {SNSButton(
                xLogo,
                "#000000",
                "X",
                "https://twitter.com/hiro_yuki_"
              )}
              {SNSButton(
                linkedinLogo,
                "#000000",
                "LinkedIn",
                "https://www.linkedin.com/in/hiroyuki-miura-836b4032/"
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default About
