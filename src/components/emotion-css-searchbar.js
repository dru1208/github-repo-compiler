import { css } from 'emotion'


const searchBar = css({
  "text-align": "center",
  "margin-top": "6%",
  "margin-bottom": "1%"
})

const searchInput = css({
  "height": "40px",
  "width": "470px",
  "margin-right": "1%",
  "border-radius": "5px",
  "border": "1px solid black",
  "padding-left": "10px",
  "font-size": "13px"
})

const searchButton = css({
  "height": "43px",
  "width": "120px",
  "border-radius": "5px",
  "color": "white",
  "background-color": "#7433f1",
  "border": "1px solid #7433f1",
  "font-size": "14px"
})

export {
  searchBar,
  searchInput,
  searchButton
}