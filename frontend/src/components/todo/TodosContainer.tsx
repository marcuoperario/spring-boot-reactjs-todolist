interface Props {
    title: string;
    children: JSX.Element | JSX.Element[];
  }
  
  const TodosContainer = ({ title, children }: Props) => {
    return (
      <div className = "space-y-2">
        <h3 className = "text-white">
          { title }
        </h3>
        <div>
          {children}
        </div>
      </div>
    );
  };
  
  export default TodosContainer;
  