import { useState } from "react";

export { Page };

interface ArticleState {
  isEditable: boolean;
  title: string;
  description: string;
}

function Page() {
  const [state, setState] = useState<ArticleState>({
    isEditable: true,
    title: "",
    description: "",
  });

  const toggleEdit = (state: string) => {
    switch (state) {
      case "e":
        setState((prevState) => ({
          ...prevState,
          isEditable: true,
        }));
        break;
      case "v":
        setState((prevState) => ({
          ...prevState,
          isEditable: false,
        }));
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setState((prevState) => ({
      ...prevState,
      title: newTitle,
    }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setState((prevState) => ({
      ...prevState,
      description: newDescription,
    }));
  };

  return (
    <article className="container center-screen">
      <nav>
        <button
          className={state.isEditable ? "active" : ""}
          onClick={() => toggleEdit("e")}
        >
          Editar
        </button>
        <button
          className={state.isEditable ? "" : "active"}
          onClick={() => toggleEdit("v")}
        >
          Vista
        </button>
      </nav>
      <div>
        <input
          className={state.isEditable ? "active" : ""}
          type="text"
          value={state.title}
          readOnly={!state.isEditable}
          onChange={handleTitleChange}
          placeholder="Title"
        ></input>
        <textarea
          className={state.isEditable ? "active" : ""}
          value={state.description}
          readOnly={!state.isEditable}
          onChange={handleDescriptionChange}
          placeholder="Description"
        ></textarea>
      </div>
    </article>
  );
}
