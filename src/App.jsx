// src/App.jsx
import "tailwindcss";
import Header from "./components/Header";
// import Menu from "./components/Menu";
import Main from "./components/Main";
// import { NoteProvider } from "./components/NoteContext";
import { ItemProvider } from "./components/ItemContext";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
       
      <ItemProvider>
        {/* <NoteProvider> */}
        <Header />
        <Main />
        {/* </NoteProvider> */}
      </ItemProvider>

    </div>
  );
}

export default App;