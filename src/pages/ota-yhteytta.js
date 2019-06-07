import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../utils/theme"

import { Heading, WidthWrapper } from "../components/common"

const ContentContainer = styled(WidthWrapper)`
  margin: 120px auto 60px;
`

const FormWrapper = styled.form`
  max-width: 600px;
`

const FieldWrapper = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  display: block;
`

const TextInput = styled.input`
  border: 2px solid #ddd;
  padding: 10px 15px;
  width: 100%;
`

const TextAreaInput = styled.textarea`
  border: 2px solid #ddd;
  padding: 10px 15px;
  width: 100%;
  height: 300px;
`

const SubmitButton = styled.button`
  background-color: ${Theme.colors.greyDarker};
  color: #fff;
  padding: 15px 30px;
  font-weight: 600;
  border: 0 none;
  font-family: ${Theme.fonts.primary};
  cursor: pointer;
`

class OtaYhteyttaPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Ota yhteyttä | Devisioona United"
          description="Ota yhteyttä Devisioona United jalkapallojoukkueeseen"
          keywords={["devisioona", "yhteydenotto", "lomake", "jalkapallo"]}
        />
        <ContentContainer>
          <Heading>Ota yhteyttä</Heading>
          <FormWrapper name="contact" method="POST" data-netlify="true">
            <FieldWrapper>
              <Label>Nimi</Label>
              <TextInput type="text" name="name" />
            </FieldWrapper>
            <FieldWrapper>
              <Label>Sähköposti</Label>
              <TextInput type="text" name="email" />
            </FieldWrapper>
            <FieldWrapper>
              <Label>Viesti</Label>
              <TextAreaInput name="message" />
            </FieldWrapper>
            <FieldWrapper>
              <SubmitButton type="button">Lähetä viesti</SubmitButton>
            </FieldWrapper>
          </FormWrapper>
        </ContentContainer>
      </Layout>
    )
  }
}

export default OtaYhteyttaPage
