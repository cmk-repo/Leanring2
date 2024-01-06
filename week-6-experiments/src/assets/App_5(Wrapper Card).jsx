
let counter = 4;
function App() {
  return <div>
    <CardWrapper_old innerComponent={<TextComponent_1 />} />
    <CardWrapper>
      <TextComponent />
    </CardWrapper>
    <CardWrapper>
      <CardWrapper>
        <div>Hello inside wrapper of a wrapper</div>
      </CardWrapper>
    </CardWrapper>

  </div>
}

function CardWrapper_old({ innerComponent }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid blue", padding: 20, margin: 10 }}>
    {innerComponent}
  </ div>
}

function CardWrapper({ children }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid blue", padding: 20, margin: 10 }}>
    {children}
  </ div>
}

function TextComponent_1() {
  return <div> Hi there this is bad type of wrapper</div>
}
function TextComponent() {
  return <div> This is good way to wrap </div>
}

export default App