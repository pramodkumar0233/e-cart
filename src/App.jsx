import "tailwindcss";
import Header from "./components/Header";
// import Menu from "./components/Menu";
import Main from "./components/Main";
import { TaskProvider } from "./components/TaskContext";
import { NoteProvider } from "./components/NoteContext";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <TaskProvider>
        <NoteProvider>
          <Header />
          <Main />
        </NoteProvider>
      </TaskProvider>
      
    </div>
  );
}

export default App;
