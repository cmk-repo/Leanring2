
import './App.css'

function App() {

  return (
    <>
      <h1>Flex box take only amount of width needed</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "blue" }}>Hi</div>
        <div style={{ backgroundColor: "green" }}>Hi</div>
      </div >

      <div className='flex'>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "blue" }}>Hi</div>
        <div style={{ backgroundColor: "green" }}>Hi</div>
      </div>
      <h1>Grid</h1>
      <div className='grid grid-cols-5' >
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-red-500'>Hi</div>
      </div >
      <h1>Grid create different width </h1>
      <div className='grid grid-cols-10' >
        <div className='bg-red-500 col-span-4'>Hi</div>
        <div className='bg-green-500 col-span-4'>Hi</div>
        <div className='bg-red-500 col-span-2'>Hi</div>
      </div >
      <h1>Flex Grid create different width investigate fix  </h1>
      <div className='flex'>
        <div className='grid grid-cols-10' >
          <div className='bg-red-500 col-span-4'>Hi</div>
          <div className='bg-green-500 col-span-4'>Hi</div>
          <div className='bg-red-500 col-span-2'>Hi</div>
        </div >
      </div>
      <h1>Responsiveness Tailwind is mobile first approach prefixed and unprefixed 'sm': take effect utilites sm md lg xl 2xl this will allow conditional logic to enable and disbale UI elements   </h1>
      <div className='bg-red-500 md:bg-blue-500'>  below md break point it will turn blue , try to reduce the size of windows to see changes, mobile is unprefixed
      </div >

      <h1>items appear one below other and when expand next to each other when increasing windows size</h1>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
      </div >
    </>
  )
}

export default App
