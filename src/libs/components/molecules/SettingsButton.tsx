import React, { useEffect, useRef, useState, VFC } from "react"
import { ButtonBase, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { SupportedLanguage } from "libs/translations"
import { useColorMode } from "libs/theme/ThemeProvider"
import GearIcon from "libs/components/icons/GearIcon"

const languages: SupportedLanguage[] = ["ja", "en"]

const Container = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 240px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.wecken.surface.elevated};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(16px);
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled(Typography)`
  color: ${(props) => props.theme.palette.wecken.black.medium};
  line-height: 1.2;
`

const CurrentValue = styled(Typography)`
  color: ${(props) => props.theme.palette.wecken.black.high};
  line-height: 1.2;
`

const SegmentedControl = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  border-radius: 6px;
`

const SegmentButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  min-width: 44px;
  height: 34px;
  padding: 0 12px;
  background-color: ${(props) =>
    props.active
      ? props.theme.palette.wecken.primary.solid
      : props.theme.palette.wecken.surface.high};
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

const GearButton = styled(ButtonBase)`
  width: 48px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.palette.wecken.black[20]};
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.wecken.surface.elevated};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  color: ${(props) => props.theme.palette.wecken.black.high};
  backdrop-filter: blur(16px);
`

const getSupportedLanguage = (language: string): SupportedLanguage => {
  return language.startsWith("ja") ? "ja" : "en"
}

const SettingsButton: VFC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { i18n, t } = useTranslation()
  const { mode, toggleMode } = useColorMode()
  const currentLanguage = getSupportedLanguage(
    i18n.resolvedLanguage || i18n.language
  )

  const onClickLanguage = (language: SupportedLanguage) => {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onPointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", onPointerDown)

    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [isOpen])

  return (
    <Container ref={containerRef}>
      {isOpen && (
        <Panel aria-label={t("Settings")}>
          <Row>
            <TextContainer>
              <Label variant="caption">{t("Appearance")}</Label>
              <CurrentValue variant="subtitle2">{t(mode)}</CurrentValue>
            </TextContainer>
            <SegmentedControl>
              <SegmentButton
                active={mode === "light"}
                aria-label={t("Switch to light")}
                onClick={mode === "dark" ? toggleMode : undefined}
              >
                {t("light")}
              </SegmentButton>
              <SegmentButton
                active={mode === "dark"}
                aria-label={t("Switch to dark")}
                onClick={mode === "light" ? toggleMode : undefined}
              >
                {t("dark")}
              </SegmentButton>
            </SegmentedControl>
          </Row>
          <Row>
            <TextContainer>
              <Label variant="caption">{t("Current Language")}</Label>
              <CurrentValue variant="subtitle2">
                {t(`lang_${currentLanguage}`)}
              </CurrentValue>
            </TextContainer>
            <SegmentedControl role="tablist" aria-label={t("Language settings")}>
              {languages.map((language) => (
                <SegmentButton
                  active={language === currentLanguage}
                  aria-label={t(`Switch to ${language}`)}
                  aria-selected={language === currentLanguage}
                  key={language}
                  onClick={() => onClickLanguage(language)}
                  role="tab"
                >
                  {language.toUpperCase()}
                </SegmentButton>
              ))}
            </SegmentedControl>
          </Row>
        </Panel>
      )}
      <GearButton
        aria-expanded={isOpen}
        aria-label={t("Settings")}
        onClick={() => setIsOpen((current) => !current)}
      >
        <GearIcon size={24} />
      </GearButton>
    </Container>
  )
}

export default SettingsButton
