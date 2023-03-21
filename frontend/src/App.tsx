import Footer from "./components/footer";
import Header from "./components/header";
import Todo from  "./components/todo/Todo";
import TodoForm from "./components/todo/TodoForm";
import useGetTodos from "./hooks/useGetTodos";
import useTodoMutation from "./hooks/useTodoMutation";
import TodosContainer from "./components/todo/TodosContainer";
import { TodoObject } from "./interfaces/index";

const App = () => {
  const { todos, refetch } = useGetTodos();
  const { handleChange, handleSubmit, todoValues, handleDelete, handleUpdate } = useTodoMutation();
  const pendingTodos = todos?.filter((todo: TodoObject) => !todo.isCompleted);
  const completedTodos = todos?.filter((todo: TodoObject) => todo.isCompleted);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 h-full my-4">
          <div className="space-y-4">
            <TodoForm
              values = { todoValues } 
              onChange = { handleChange }
              onSubmit = { handleSubmit }
              refetch = { refetch }
            />
            <TodosContainer title = {` Tasks - ${pendingTodos?.length ?? 0}`}>
              {pendingTodos?.map((todo, key) => (
                <Todo
                  key = { key }
                  values = { todo }
                  refetch = { refetch }
                  onUpdate = { handleUpdate }
                  onDelete = { handleDelete }
                />
              ))}
            </TodosContainer>
            <TodosContainer title = {`Completed Tasks - ${completedTodos?.length ?? 0}`}>
              { completedTodos?.map((todo, key) => (
                <Todo
                  key = { key }
                  values = { todo }
                  refetch = { refetch }
                  onUpdate = { handleUpdate }
                  onDelete = { handleDelete }
                />
              ))}
            </TodosContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
