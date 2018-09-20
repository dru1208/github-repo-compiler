import { css } from 'emotion'

const table = css({
  "margin-left": "7%",
  "margin-top": "6%"
})

const headerRow = css({
  "display": "flex",
  "width": "600px",
  "margin-bottom": "3%",
})

const headerName = css({
  "width": "38%",
  "text-align": "left"
})

const headerLanguage = css({
  "width": "30%",
  "text-align": "left"
})

const headerTag = css({
  "width": "22%",
  "text-align": "left"
})

const headerButton = css({
  "width": "10%",
  "text-align": "left"
})

const searchRow = css({
  "display": "flex",
  "width": "600px",
  "margin-bottom": "1%"
})

const resultName = css({
  "width": "38%",
  "text-align": "left"
})

const resultURL = css({
  "color": "black",
  "text-decoration": "none",
})

const resultLanguage = css`
  width: 30%;
  text-align: left;
`

const resultTag = css`
  width: 22%;
  text-align: left;
`

const resultButton = css`
  width: 10%;
  text-align: left
`

const button = css`
  background: none;
  border: none;
  font-size: 16px;
  color: #7433f1;
  text-decoration: underline;
`

const savedResultsTable = css`
  width: 50vw;
  min-height: 705px;
  height: 100%;
  background-color: #f3ecfe;
`

const searchMain = css`
  width: 50vw;
`

const hiddenButton = css`
  visibility: hidden;
  padding-top: 4px;
`

export {
  table,
  headerRow,
  headerName,
  headerLanguage,
  headerTag,
  headerButton,
  searchRow,
  resultName,
  resultURL,
  resultLanguage,
  resultTag,
  resultButton,
  button,
  savedResultsTable,
  searchMain,
  hiddenButton
}