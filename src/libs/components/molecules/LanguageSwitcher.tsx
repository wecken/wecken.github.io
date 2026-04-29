import React, { VFC } from "react"
import { ButtonBase, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { SupportedLanguage } from "libs/translations"

const languages: SupportedLanguage[] = ["ja", "en"]

const Container = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1100;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(16px);
`

const GlobeIcon = styled.svg`
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  color: ${(props) => props.theme.palette.wecken.primary.solid};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 112px;
`

const Label = styled(Typography)`
  color: ${(props) => props.theme.palette.wecken.black.medium};
  line-height: 1.2;
`

const CurrentLanguage = styled(Typography)`
  color: ${(props) => props.theme.palette.wecken.black.high};
  line-height: 1.2;
`

const Tabs = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  border-radius: 6px;
`

const LanguageButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  width: 44px;
  height: 34px;
  background-color: ${(props) =>
    props.active ? props.theme.palette.wecken.primary.solid : "#ffffff"};
  color: ${(props) =>
    props.active
      ? props.theme.palette.wecken.white.high
      : props.theme.palette.wecken.black.high};
  font-size: 13px;
  font-weight: 600;
  line-height: 1;

  &:not(:last-of-type) {
    border-right: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  }
`

const getSupportedLanguage = (language: string): SupportedLanguage => {
  return language.startsWith("ja") ? "ja" : "en"
}

const LanguageSwitcher: VFC = () => {
  const { i18n, t } = useTranslation()
  const currentLanguage = getSupportedLanguage(
    i18n.resolvedLanguage || i18n.language
  )

  const onClickLanguage = (language: SupportedLanguage) => {
    i18n.changeLanguage(language)
  }

  return (
    <Container aria-label={t("Language settings")}>
      <GlobeIcon
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      </GlobeIcon>
      <TextContainer>
        <Label variant="caption">{t("Current Language")}</Label>
        <CurrentLanguage variant="subtitle2">
          {t(`lang_${currentLanguage}`)}
        </CurrentLanguage>
      </TextContainer>
      <Tabs role="tablist" aria-label={t("Language settings")}>
        {languages.map((language) => (
          <LanguageButton
            active={language === currentLanguage}
            aria-label={t(`Switch to ${language}`)}
            aria-selected={language === currentLanguage}
            key={language}
            onClick={() => onClickLanguage(language)}
            role="tab"
          >
            {language.toUpperCase()}
          </LanguageButton>
        ))}
      </Tabs>
    </Container>
  )
}

export default LanguageSwitcher
