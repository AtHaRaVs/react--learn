import React from "react";
import Input from "./Input";
import { useRef } from "react";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      enteredDueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[60rem] mt-16 mx-auto">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="tracking-wider text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="tracking-wider py-2 px-6 rounded bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={desc} label="Description" textArea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
